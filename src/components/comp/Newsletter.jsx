import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
  return (
    <section className="ds-template-py-16">
      <h2 className="ds-template-text-2xl ds-template-font-bold ds-template-mb-8">
        Newsletter
      </h2>
      <p className="dark:ds-template-text-gray-400 ds-template-text-gray-600 ds-template-mb-6">
        I share clean dev tips once a month & I would love to share them with
        you. Give me a try - No spam, I promise.
      </p>
      <div className="ds-template-flex ds-template-gap-4">
        <Input
          type="email"
          placeholder="your@email.com"
          className="ds-template-bg-card ds-template-border-none"
        />
        <Button>Subscribe</Button>
      </div>
    </section>
  );
};
