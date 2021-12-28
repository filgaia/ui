import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { ModalSizeVariants, ResponsiveVariants } from '@unicodernsui/core'
import { UiCodeHighlight } from '@unicodernsui/code-highlight'
import { UiModal, UiModalModel } from '../'
import { UiModalDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Modal',
  component: UiModal,
  argTypes: {
    titleSlot: { control: { type: 'text' } },
    bodySlot: { control: { type: 'text' } },
    footerSlot: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(ModalSizeVariants),
    },
    fullscreen: {
      control: { type: 'select' },
      options: [false, true, ...Object.values(ResponsiveVariants)],
    },
    ['aria:title']: { name: 'title(aria)', control: { type: 'text' } },
    ['aria:description']: {
      name: 'description(aria)',
      control: { type: 'text' },
    },
    ['aria:role']: { name: 'role(aria)', control: { type: 'text' } },
    ['aria:buttonClose']: {
      name: 'button close(aria)',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: UiModalDoc,
    },
  },
}

type StoryModel = UiModalModel & {
  titleSlot: string
  bodySlot: string
  footerSlot: string
}

const Template = (args: StoryModel) => ({
  components: { UiModal, UiCodeHighlight },
  setup() {
    const { titleSlot, bodySlot, footerSlot, ...newArgs } = args;
    const toggle = ref(false)

    return { args, newArgs, toggle }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
  },
  template: `
    <div>
      <a href="" @click.prevent="toggle=!toggle">Toggle visible</a>
      <br>
      <ui-modal :="newArgs" :show="toggle" @show="show" @close="close() & (toggle = false)" @hide="hide">
        <template #title>Slot: <a href>{{ args.titleSlot }}</a></template>
        <template #body>Slot: &#1083; {{ args.bodySlot }} &#1083; &#1083; &#1083;</template>
        <template #footer><button>{{ args.footerSlot }}</button></template>
      </ui-modal>
    </div>
  `,
})

const baseArgs: StoryModel = {
  titleSlot: 'Custom title',
  bodySlot: 'Custom body',
  footerSlot: 'Custom footer action',
  animate: true,
  dismissible: false,
  disableBackdrop: false,
  disableEscKey: false,
  autoFocus: true,
  scrollable: false,
  verticalCenter: false,
  show: true,
}

export const CustomSlots = Template.bind({})
CustomSlots.args = {
  ...baseArgs,
}
CustomSlots.parameters = {
  docs: {
    source: {
      code: `<ui-modal title="Custom Slots" scrollable show>
  <template #title>Some title</template>
  <template #body>Some body</template>
  <template #footer><button>Some button</button></template>
</ui-modal>`,
    },
  },
}
