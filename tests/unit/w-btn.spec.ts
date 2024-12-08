import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import { WBtn } from "@/shared/ui"

describe("WBtn", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(WBtn)
    expect(wrapper.find("button").exists()).toBe(true)
    expect(wrapper.find("button").attributes("disabled")).toBeUndefined()
    expect(wrapper.find("button").classes()).toContain("btn-tonal")
    expect(wrapper.find("button").classes()).toContain("spacing-rectangle-min")
    expect(wrapper.find("button").classes()).toContain("radius-small")
  })

  it("renders with custom variant", () => {
    const wrapper = mount(WBtn, {
      props: {
        variant: "filled",
      },
    })
    expect(wrapper.find("button").classes()).toContain("btn-filled")
  })

  it("renders with custom spacing", () => {
    const wrapper = mount(WBtn, {
      props: {
        spacing: "max",
      },
    })
    expect(wrapper.find("button").classes()).toContain("spacing-rectangle-max")
  })

  it("renders with custom radius", () => {
    const wrapper = mount(WBtn, {
      props: {
        radius: "medium",
      },
    })
    expect(wrapper.find("button").classes()).toContain("radius-medium")
  })

  it("renders with prepend icon", () => {
    const wrapper = mount(WBtn, {
      props: {
        prependIcon: "filter-alt",
      },
    })
    expect(wrapper.find(".btn__prepend-icon").exists()).toBe(true)
  })

  it("renders with append icon", () => {
    const wrapper = mount(WBtn, {
      props: {
        appendIcon: "filter-alt",
      },
    })
    expect(wrapper.find(".btn__append-icon").exists()).toBe(true)
  })

  it("renders with both prepend and append icons", () => {
    const wrapper = mount(WBtn, {
      props: {
        prependIcon: "filter-alt",
        appendIcon: "filter-alt",
      },
    })
    expect(wrapper.find(".btn__prepend-icon").exists()).toBe(true)
    expect(wrapper.find(".btn__append-icon").exists()).toBe(true)
  })

  it("renders with disabled state", () => {
    const wrapper = mount(WBtn, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.find("button").attributes("disabled")).toBe("")
  })

  it("renders default slot content", () => {
    const wrapper = mount(WBtn, {
      slots: {
        default: "Click me",
      },
    })
    expect(wrapper.text()).toContain("Click me")
  })
})
