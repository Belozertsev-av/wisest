import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { WIcon } from "@/shared/ui"

describe("WIcon", () => {
  it("renders the icon correctly", () => {
    const wrapper = mount(WIcon, {
      props: {
        icon: "filter-alt",
      },
    })

    const useElement = wrapper.find("use")
    expect(useElement.attributes("href")).toBe("#filter-alt")
  })

  it("applies the correct size", () => {
    const wrapper = mount(WIcon, {
      props: {
        icon: "filter-alt",
        size: "2rem",
      },
    })

    const svgElement = wrapper.find("svg")
    expect(svgElement.attributes("style")).toContain("width: 2rem")
    expect(svgElement.attributes("style")).toContain("height: 2rem")
  })

  it("applies inline style when inline prop is true", () => {
    const wrapper = mount(WIcon, {
      props: {
        icon: "filter-alt",
        inline: true,
      },
    })

    const svgElement = wrapper.find("svg")
    expect(svgElement.attributes("style")).toContain("display: inline-block")
  })

  it("applies block style when inline prop is false", () => {
    const wrapper = mount(WIcon, {
      props: {
        icon: "filter-alt",
        inline: false,
      },
    })

    const svgElement = wrapper.find("svg")
    expect(svgElement.attributes("style")).toContain("display: block")
  })

  it("uses default size when size prop is not provided", () => {
    const wrapper = mount(WIcon, {
      props: {
        icon: "filter-alt",
      },
    })

    const svgElement = wrapper.find("svg")
    expect(svgElement.attributes("style")).toContain("width: 1.5rem")
    expect(svgElement.attributes("style")).toContain("height: 1.5rem")
  })

  it("renders the icon with default props", () => {
    const wrapper = mount(WIcon, {
      props: {
        icon: "filter-alt",
      },
    })

    const svgElement = wrapper.find("svg")
    expect(svgElement.attributes("style")).toContain("width: 1.5rem")
    expect(svgElement.attributes("style")).toContain("height: 1.5rem")
    expect(svgElement.attributes("style")).toContain("display: block")

    const useElement = wrapper.find("use")
    expect(useElement.attributes("href")).toBe("#filter-alt")
  })
})
