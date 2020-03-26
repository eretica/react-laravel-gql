import { addDecorator, addParameters } from "@storybook/react";
import { withScreenshot } from "storycap";

addDecorator(withScreenshot);
addParameters({
  screenshot: {
    viewports: {
      large: {
        width: 1024,
        height: 768,
      },
      small: {
        width: 375,
        height: 668,
      },
      xsmall: {
        width: 320,
        height: 568,
      },
    },
    delay: 100
  }
});
