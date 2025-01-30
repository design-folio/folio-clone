import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="ds-template-min-h-screen ds-template-bg-background ds-template-flex ds-template-items-center ds-template-justify-center ds-template-p-4">
      <div className="ds-template-max-w-4xl ds-template-w-full">
        <div className="ds-template-text-center ds-template-mb-12">
          <h1 className="ds-template-text-4xl ds-template-font-bold ds-template-mb-4">
            Choose Your Template
          </h1>
          <p className="ds-template-text-muted-foreground">
            Select a template to get started with your portfolio
          </p>
        </div>

        <div className="ds-template-grid md:ds-template-grid-cols-2 ds-template-gap-8">
          <Link to="/minimal">
            <Card className="ds-template-group hover:ds-template-shadow-lg ds-template-transition-all ds-template-duration-300 ds-template-cursor-pointer ds-template-border-2 hover:ds-template-border-primary">
              <CardHeader>
                <CardTitle className="ds-template-flex ds-template-items-center ds-template-justify-between">
                  Minimal
                  <ArrowRight className="ds-template-w-5 ds-template-h-5 ds-template-opacity-0 group-hover:ds-template-opacity-100 ds-template-transform group-hover:ds-template-translate-x-1 ds-template-transition-all" />
                </CardTitle>
                <CardDescription>Clean and minimalist design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="ds-template-aspect-video ds-template-bg-muted ds-template-rounded-lg ds-template-overflow-hidden">
                  <img
                    src="/lovable-uploads/811e1aed-257a-4113-b174-22ade0f7dfc8.png"
                    alt="Minimal template preview"
                    className="ds-template-w-full ds-template-h-full ds-template-object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/portfolio">
            <Card className="ds-template-group hover:ds-template-shadow-lg ds-template-transition-all ds-template-duration-300 ds-template-cursor-pointer ds-template-border-2 hover:ds-template-border-primary">
              <CardHeader>
                <CardTitle className="ds-template-flex ds-template-items-center ds-template-justify-between">
                  Depth
                  <ArrowRight className="ds-template-w-5 ds-template-h-5 ds-template-opacity-0 group-hover:ds-template-opacity-100 ds-template-transform group-hover:ds-template-translate-x-1 ds-template-transition-all" />
                </CardTitle>
                <CardDescription>
                  Modern design with 3D animations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="ds-template-aspect-video ds-template-bg-muted ds-template-rounded-lg ds-template-overflow-hidden">
                  <img
                    src="/lovable-uploads/84412779-0539-4904-9377-f71b15d378f7.png"
                    alt="Depth template preview"
                    className="ds-template-w-full ds-template-h-full ds-template-object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
