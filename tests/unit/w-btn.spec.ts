import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { WBtn } from "../../src/shared/ui/w-btn"

describe("WBtn", () => {
  it("renders the button with the correct text", () => {
    const wrapper = mount(WBtn, {
      props: {
        text: "Click me",
      },
    })

    // Проверяем, что текст кнопки отображается корректно
    expect(wrapper.text()).toBe("Click me")
  })

  it("emits a click event when clicked", async () => {
    const wrapper = mount(WBtn, {
      props: {
        text: "Click me",
      },
    })

    // Имитируем клик по кнопке
    await wrapper.trigger("click")

    // Проверяем, что событие click было вызвано
    expect(wrapper.emitted("click")).toBeTruthy()
  })
})
