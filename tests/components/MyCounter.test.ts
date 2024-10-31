import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import MyCounter from "../../src/components/MyCounter.vue";

describe("<MyCounter/>", () => {
  test("should match snapshots", () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
    console.log("🚀 ~ test ~ wrapper:", wrapper);
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
