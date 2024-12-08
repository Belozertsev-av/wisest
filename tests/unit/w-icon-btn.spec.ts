import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { WIconBtn } from "@/shared/ui" // Путь к вашему компоненту

describe("WIconBtn", () => {
  it("renders correctly", () => {
    const wrapper = mount(WIconBtn, {
      props: {
        icon: "filter-alt",
        variant: "filled",
        iconSize: "2rem",
        disabled: false,
        spacing: "max",
        radius: "medium",
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find("button").exists()).toBe(true)
    expect(wrapper.findComponent({ name: "WIcon" }).exists()).toBe(true)
  })

  it("applies the correct variant class", () => {
    const wrapper = mount(WIconBtn, {
      props: {
        icon: "filter-alt",
        variant: "tonal",
      },
    })

    expect(wrapper.classes()).toContain("btn-tonal")
  })

  it("applies the correct spacing class", () => {
    const wrapper = mount(WIconBtn, {
      props: {
        icon: "filter-alt",
        spacing: "normal",
      },
    })

    expect(wrapper.classes()).toContain("spacing-square-normal")
  })

  it("applies the correct radius class", () => {
    const wrapper = mount(WIconBtn, {
      props: {
        icon: "filter-alt",
        radius: "medium",
      },
    })

    expect(wrapper.classes()).toContain("radius-medium")
  })

  it("disables the button when disabled prop is true", () => {
    const wrapper = mount(WIconBtn, {
      props: {
        icon: "filter-alt",
        disabled: true,
      },
    })

    expect(wrapper.attributes("disabled")).toBeDefined()
  })

  it("does not disable the button when disabled prop is false", () => {
    const wrapper = mount(WIconBtn, {
      props: {
        icon: "filter-alt",
        disabled: false,
      },
    })

    expect(wrapper.attributes("disabled")).toBeUndefined()
  })

  it("renders the correct icon size", () => {
    const wrapper = mount(WIconBtn, {
      props: {
        icon: "filter-alt",
        iconSize: "2rem",
      },
    })

    const iconComponent = wrapper.findComponent({ name: "WIcon" })
    expect(iconComponent.props("size")).toBe("2rem")
  })
})
