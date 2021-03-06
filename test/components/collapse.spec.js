import { mount } from '@vue/test-utils';
import Collapse from '../../src/js/components/collapse.vue';

describe('#Collapse', () => {
  it('mount.', () => {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'test-target',
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    const elm = wrapper.element;
    expect(elm.tagName).toBe('DIV');
    expect(elm.style.display).toBe('none');
    expect(elm.children[0].classList.contains('description')).toBe(true);
  });

  it('expanded prop test.', () => {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'test-target',
        expanded: true,
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    expect(wrapper.props().expanded).toBe(true);
    expect(wrapper.element.style.display).not.toBe('none');
  });

  it('toggle by event emit.', () => {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'test-target',
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    wrapper.vm.$root.$emit('collapse-toggle', 'test-target');
    const stateEvent = wrapper.emitted('state');
    expect(stateEvent).toBeTruthy();
    expect(stateEvent[0][0].id).toEqual('test-target');
  });

  it('will be emitted `state` event when state changes.', () => {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'target',
        expanded: true,
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    expect(wrapper.emitted('state').length).toBe(1); // init.
    wrapper.vm.toggleCollapse('target', 'toggle');
    expect(wrapper.emitted('state').length).toBe(2);
    expect(wrapper.vm.show).toBe(false);
  });

  it('can collapse horizontally.', () => {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'target',
        expanded: true,
        direction: 'horizontal',
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    expect(wrapper.element.style.display).not.toBe('none');
    wrapper.vm.toggleCollapse('target', 'hide');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.element.style.display).toBe('none');
    });
  });
});
