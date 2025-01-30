import React, { useContext, useMemo } from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef(function ChartContainer(
  { id, className, children, config, ...props },
  ref
) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "ds-template-flex ds-template-aspect-video ds-template-justify-center ds-template-text-xs [&_.recharts-cartesian-axis-tick_text]:ds-template-fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:ds-template-stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:ds-template-stroke-border [&_.recharts-dot[stroke='#fff']]:ds-template-stroke-transparent [&_.recharts-layer]:ds-template-outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:ds-template-stroke-border [&_.recharts-radial-bar-background-sector]:ds-template-fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:ds-template-fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:ds-template-stroke-border [&_.recharts-sector[stroke='#fff']]:ds-template-stroke-transparent [&_.recharts-sector]:ds-template-outline-none [&_.recharts-surface]:ds-template-outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

function ChartStyle({ id, config }) {
  const colorConfig = useMemo(() => {
    return Object.entries(config).filter(
      ([_, config]) => config.theme || config.color
    );
  }, [config]);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
}

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef(function ChartTooltipContent(
  {
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey,
  },
  ref
) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item.dataKey || item.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("ds-template-font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return (
      <div className={cn("ds-template-font-medium", labelClassName)}>
        {value}
      </div>
    );
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      ref={ref}
      className={cn(
        "ds-template-grid ds-template-min-w-[8rem] ds-template-items-start ds-template-gap-1.5 ds-template-rounded-lg ds-template-border ds-template-border-border/50 ds-template-bg-background ds-template-px-2.5 ds-template-py-1.5 ds-template-text-xs ds-template-shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="ds-template-grid ds-template-gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div
              key={item.dataKey}
              className={cn(
                "ds-template-flex ds-template-w-full ds-template-flex-wrap ds-template-items-stretch ds-template-gap-2 [&>svg]:ds-template-h-2.5 [&>svg]:ds-template-w-2.5 [&>svg]:ds-template-text-muted-foreground",
                indicator === "dot" && "ds-template-items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "ds-template-shrink-0 ds-template-rounded-[2px] ds-template-border-[--color-border] ds-template-bg-[--color-bg]",
                          {
                            "ds-template-h-2.5 ds-template-w-2.5":
                              indicator === "dot",
                            "ds-template-w-1": indicator === "line",
                            "ds-template-w-0 ds-template-border-[1.5px] ds-template-border-dashed ds-template-bg-transparent":
                              indicator === "dashed",
                            "ds-template-my-0.5":
                              nestLabel && indicator === "dashed",
                          }
                        )}
                        style={{
                          "--color-bg": indicatorColor,
                          "--color-border": indicatorColor,
                        }}
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "ds-template-flex ds-template-flex-1 ds-template-justify-between ds-template-leading-none",
                      nestLabel
                        ? "ds-template-items-end"
                        : "ds-template-items-center"
                    )}
                  >
                    <div className="ds-template-grid ds-template-gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="ds-template-text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="ds-template-font-mono ds-template-font-medium ds-template-tabular-nums ds-template-text-foreground">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef(function ChartLegendContent(
  { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
  ref
) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-items-center ds-template-justify-center ds-template-gap-4",
        verticalAlign === "top" ? "ds-template-pb-3" : "ds-template-pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn(
              "ds-template-flex ds-template-items-center ds-template-gap-1.5 [&>svg]:ds-template-h-3 [&>svg]:ds-template-w-3 [&>svg]:ds-template-text-muted-foreground"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="ds-template-h-2 ds-template-w-2 ds-template-shrink-0 ds-template-rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey = key;

  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = payloadPayload[key];
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
