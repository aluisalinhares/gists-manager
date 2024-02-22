import { mount } from "@vue/test-utils";
import { vi } from "vitest";
import IconButton from "../../components/IconButton.vue";
describe("IconButton", () => {
  
  it("renders the button without a border by default", async () => {
    const wrapper = mount(IconButton);
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(
      button.element.classList.contains("icon-button--border-default")
    ).toBe(false);
  });

  it("renders the button with a border when border prop is true", async () => {
    const wrapper = mount(IconButton, { props: { border: true } });
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(
      button.element.classList.contains("icon-button--border-default")
    ).toBe(true);
  });

  it("renders the button with a specific border color", async () => {
    const wrapper = mount(IconButton, {
      props: { border: true, color: "red" },
    });
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.element.classList.contains("icon-button--border-red")).toBe(
      true
    );
  });

  it("emits click event when clicked", async () => {
    const handleClick = vi.fn();
    const wrapper = mount(IconButton, { props: { onClick: handleClick } });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
