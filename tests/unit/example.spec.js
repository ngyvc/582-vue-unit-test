import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    // const msg = "new message";
    // const wrapper = shallowMount(HelloWorld, {
    //   props: { msg },
    // });
    // expect(wrapper.text()).toMatch(msg);
  });

  it("is true", () => {
    expect(true).toBe(true);
  });

  it("adds 1 plus 1", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.add(1, 1)).toBe(2);
  });

  it("shows the button when visible is true", () => {
    const buttonText = "Button";
    const wrapper = shallowMount(HelloWorld);
    // expect(wrapper.text()).toBe(buttonText);
    expect(wrapper.find("div").text()).toBe(buttonText);
  });

  it("hides the button when visible is false", async () => {
    const buttonText = "Button";
    const wrapper = shallowMount(HelloWorld);
    // expect(wrapper.text()).toBe(buttonText);
    expect(wrapper.find("div").text()).toBe(buttonText);
    await wrapper.setData({ visible: false });
    expect(wrapper.find("div").exists()).toBe(false);
  });

  it("emits an action when the button is clicked", async () => {
    const wrapper = shallowMount(HelloWorld);
    await wrapper.find("div").trigger("click");
    expect(wrapper.emitted().action).toBeTruthy();
    console.log(wrapper.emitted().action);
    expect(wrapper.emitted().action[0][0]).toEqual(true);
  });

  it("changes the class of the button when clicked", async () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.isClicked).toBe(false);
    await wrapper.find("div").trigger("click");
    expect(wrapper.vm.isClicked).toBe(true);
    expect(wrapper.classes()).toContain("isClicked");
  });

});
