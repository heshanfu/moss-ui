import Util from '../lib/util';

// v-set-value:{arg}="value"
// arg: query string key name.
// value: set value directly.

export default {
  name: 'set-value',
  bind(el, binding) {
    if (binding.value) {
      el.value = binding.value;
    } else {
      let queries = Util.locationSearchToObject();

      if (queries && queries[binding.arg]) {
        el.value = queries[binding.arg];
      }
    }
  },
};
