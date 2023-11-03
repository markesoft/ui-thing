export default [
  {
    name: "Accordion",
    value: "accordion",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-icon", "nuxt-lodash"],
    nuxtModules: ["nuxt-icon", "nuxt-lodash"],
    instructions: ["Remember to add the animations to your tailwind.config.js"],
    files: [
      "Accordion/Accordion.vue",
      "Accordion/Content.vue",
      "Accordion/Header.vue",
      "Accordion/Item.vue",
      "Accordion/Trigger.vue",
    ],
  },
  {
    name: "Alert",
    value: "alert",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-icon", "nuxt-lodash", "@vueuse/core", "@vueuse/nuxt"],
    nuxtModules: ["nuxt-icon", "nuxt-lodash", "@vueuse/nuxt"],
    files: ["Alert/Alert.vue", "Alert/Description.vue", "Alert/Title.vue"],
  },
  {
    name: "Alert Dialog",
    value: "alert-dialog",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-icon", "nuxt-lodash", "@vueuse/core", "@vueuse/nuxt"],
    nuxtModules: ["nuxt-icon", "nuxt-lodash", "@vueuse/nuxt"],
    files: [
      "AlertDialog/Action.vue",
      "AlertDialog/AlertDialog.vue",
      "AlertDialog/Cancel.vue",
      "AlertDialog/Content.vue",
      "AlertDialog/Description.vue",
      "AlertDialog/Footer.vue",
      "AlertDialog/Header.vue",
      "AlertDialog/Overlay.vue",
      "AlertDialog/Portal.vue",
      "AlertDialog/Title.vue",
      "AlertDialog/Trigger.vue",
    ],
  },
  {
    name: "Aspect Ratio",
    value: "aspect-ratio",
    deps: ["radix-vue"],
    devDeps: [],
    nuxtModules: [],
    files: ["AspectRatio.vue"],
  },
  {
    name: "Autocomplete",
    value: "autocomplete",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-icon", "nuxt-lodash", "@vueuse/core", "@vueuse/nuxt"],
    nuxtModules: ["nuxt-icon", "nuxt-lodash", "@vueuse/nuxt"],
    files: [
      "Autocomplete/Anchor.vue",
      "Autocomplete/Arrow.vue",
      "Autocomplete/Autocomplete.vue",
      "Autocomplete/Cancel.vue",
      "Autocomplete/Content.vue",
      "Autocomplete/Empty.vue",
      "Autocomplete/Group.vue",
      "Autocomplete/Input.vue",
      "Autocomplete/Item.vue",
      "Autocomplete/ItemIndicator.vue",
      "Autocomplete/Label.vue",
      "Autocomplete/Portal.vue",
      "Autocomplete/Separator.vue",
      "Autocomplete/Trigger.vue",
      "Autocomplete/Viewport.vue",
    ],
  },
  {
    name: "Avatar",
    value: "avatar",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-lodash"],
    nuxtModules: ["nuxt-lodash"],
    files: ["Avatar/Avatar.vue", "Avatar/Fallback.vue", "Avatar/Image.vue"],
  },
  {
    name: "Badge",
    value: "badge",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: ["Badge.vue"],
  },
  {
    name: "Breadcrumbs",
    value: "breadcrumbs",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-icon"],
    nuxtModules: ["nuxt-icon"],
    files: ["Breadcrumbs.vue"],
  },
  {
    name: "Button",
    value: "button",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    utils: ["shared.styles.ts"],
    files: ["Button.vue"],
  },
  {
    name: "Calendar",
    value: "calendar",
    deps: [],
    devDeps: ["@samk-dev/nuxt-vcalendar"],
    nuxtModules: ["@samk-dev/nuxt-vcalendar"],
    instructions: ["You can customize the calendar by adding options to your nuxt.config.js file"],
    files: ["Calendar.vue"],
  },
  {
    name: "Card",
    value: "card",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-lodash"],
    nuxtModules: ["nuxt-lodash"],
    files: [
      "Card/Card.vue",
      "Card/Content.vue",
      "Card/Description.vue",
      "Card/Footer.vue",
      "Card/Header.vue",
      "Card/Title.vue",
    ],
  },
  {
    name: "Checkbox",
    value: "checkbox",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: ["Checkbox/Checkbox.vue", "Checkbox/Indicator.vue"],
  },
  {
    name: "Collapsible",
    value: "collapsible",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    instructions: ["Remember to add the animations to your tailwind.config.js"],
    files: ["Collapsible/Collapsible.vue", "Collapsible/Content.vue", "Collapsible/Trigger.vue"],
  },
  {
    name: "Command",
    value: "command",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "Command/Cancel.vue",
      "Command/Command.vue",
      "Command/Dialog.vue",
      "Command/Empty.vue",
      "Command/Group.vue",
      "Command/Input.vue",
      "Command/Item.vue",
      "Command/Label.vue",
      "Command/List.vue",
      "Command/Separator.vue",
      "Command/Shortcut.vue",
    ],
  },
  {
    name: "Context Menu",
    value: "context-menu",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "ContextMenu/Arrow.vue",
      "ContextMenu/CheckboxItem.vue",
      "ContextMenu/Content.vue",
      "ContextMenu/ContextMenu.vue",
      "ContextMenu/Group.vue",
      "ContextMenu/Item.vue",
      "ContextMenu/ItemIndicator.vue",
      "ContextMenu/Label.vue",
      "ContextMenu/Portal.vue",
      "ContextMenu/RadioGroup.vue",
      "ContextMenu/RadioItem.vue",
      "ContextMenu/Separator.vue",
      "ContextMenu/Shortcut.vue",
      "ContextMenu/Sub.vue",
      "ContextMenu/SubContent.vue",
      "ContextMenu/SubTrigger.vue",
      "ContextMenu/Trigger.vue",
    ],
  },
  {
    name: "Datepicker",
    value: "datepicker",
    deps: [],
    devDeps: ["@samk-dev/nuxt-vcalendar"],
    nuxtModules: ["@samk-dev/nuxt-vcalendar"],
    instructions: [
      "You can customize the datepicker by adding options to your nuxt.config.js file",
    ],
    files: ["Datepicker.vue"],
  },
  {
    name: "Dialog",
    value: "dialog",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "Dialog/Close.vue",
      "Dialog/Content.vue",
      "Dialog/Description.vue",
      "Dialog/Dialog.vue",
      "Dialog/Footer.vue",
      "Dialog/Header.vue",
      "Dialog/Overlay.vue",
      "Dialog/Portal.vue",
      "Dialog/Title.vue",
      "Dialog/Trigger.vue",
    ],
  },
  {
    name: "Dropdown Menu",
    value: "dropdown-menu",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "DropdownMenu/Arrow.vue",
      "DropdownMenu/CheckboxItem.vue",
      "DropdownMenu/Content.vue",
      "DropdownMenu/DropdownMenu.vue",
      "DropdownMenu/Group.vue",
      "DropdownMenu/Item.vue",
      "DropdownMenu/ItemIndicator.vue",
      "DropdownMenu/Label.vue",
      "DropdownMenu/Portal.vue",
      "DropdownMenu/RadioGroup.vue",
      "DropdownMenu/RadioItem.vue",
      "DropdownMenu/Separator.vue",
      "DropdownMenu/Shortcut.vue",
      "DropdownMenu/Sub.vue",
      "DropdownMenu/SubContent.vue",
      "DropdownMenu/SubTrigger.vue",
      "DropdownMenu/Trigger.vue",
    ],
  },
  {
    name: "Dropfile",
    value: "dropfile",
    deps: ["tailwind-variants"],
    devDeps: ["nuxt-icon"],
    nuxtModules: ["nuxt-icon"],
    files: ["Dropfile.vue"],
  },
  {
    name: "Form",
    value: "form",
    deps: ["radix-vue", "tailwind-variants", "@vee-validate/nuxt"],
    devDeps: [],
    nuxtModules: ["@vee-validate/nuxt"],
    composables: ["useFormField.ts"],
    files: [
      "Form/Control.vue",
      "Form/Description.vue",
      "Form/Item.vue",
      "Form/Label.vue",
      "Form/Message.vue",
    ],
  },
  {
    name: "Hover Card",
    value: "hover-card",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: [
      "HoverCard/Arrow.vue",
      "HoverCard/Content.vue",
      "HoverCard/HoverCard.vue",
      "HoverCard/Portal.vue",
      "HoverCard/Trigger.vue",
    ],
  },
  {
    name: "Input",
    value: "input",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-lodash", "@vueuse/core", "@vueuse/nuxt"],
    nuxtModules: ["nuxt-lodash", "@vueuse/nuxt"],
    files: ["Input.vue"],
  },
  {
    name: "Keyboard Key",
    value: "kbd",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: ["Kbd.vue"],
  },
  {
    name: "Label",
    value: "label",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-lodash"],
    nuxtModules: ["nuxt-lodash"],
    files: ["Label.vue"],
  },
  {
    name: "Menubar",
    value: "menubar",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "Menubar/Arrow.vue",
      "Menubar/CheckboxItem.vue",
      "Menubar/Content.vue",
      "Menubar/Group.vue",
      "Menubar/Item.vue",
      "Menubar/ItemIndicator.vue",
      "Menubar/Label.vue",
      "Menubar/Menu.vue",
      "Menubar/Menubar.vue",
      "Menubar/Portal.vue",
      "Menubar/RadioGroup.vue",
      "Menubar/RadioItem.vue",
      "Menubar/Separator.vue",
      "Menubar/Shortcut.vue",
      "Menubar/Sub.vue",
      "Menubar/SubContent.vue",
      "Menubar/SubTrigger.vue",
      "Menubar/Trigger.vue",
    ],
  },
  {
    name: "Native Select",
    value: "native-select",
    deps: ["tailwind-variants"],
    devDeps: ["nuxt-icon", "@vueuse/core", "@vueuse/nuxt"],
    nuxtModules: ["nuxt-icon", "@vueuse/nuxt"],
    files: ["NativeSelect.vue"],
  },
  {
    name: "Navigation Menu",
    value: "navigation-menu",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "NavigationMenu/Content.vue",
      "NavigationMenu/Indicator.vue",
      "NavigationMenu/Item.vue",
      "NavigationMenu/Link.vue",
      "NavigationMenu/List.vue",
      "NavigationMenu/NavigationMenu.vue",
      "NavigationMenu/Sub.vue",
      "NavigationMenu/Trigger.vue",
      "NavigationMenu/Viewport.vue",
    ],
  },
  {
    name: "One-Time Password",
    value: "otp",
    deps: ["tailwind-variants", "vue3-otp-input"],
    devDeps: ["@vueuse/core", "@vueuse/nuxt"],
    nuxtModules: ["@vueuse/nuxt"],
    files: ["OTP.vue"],
  },
  {
    name: "Pagination",
    value: "pagination",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-icon"],
    nuxtModules: ["nuxt-icon"],
    files: [
      "Pagination/Ellipsis.vue",
      "Pagination/First.vue",
      "Pagination/Item.vue",
      "Pagination/Last.vue",
      "Pagination/List.vue",
      "Pagination/Next.vue",
      "Pagination/Pagination.vue",
      "Pagination/Prev.vue",
    ],
  },
  {
    name: "Popover",
    value: "popover",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "Popover/Anchor.vue",
      "Popover/Arrow.vue",
      "Popover/Close.vue",
      "Popover/Content.vue",
      "Popover/Popover.vue",
      "Popover/Portal.vue",
      "Popover/Trigger.vue",
      "Popover/X.vue",
    ],
  },
  {
    name: "Progress",
    value: "progress",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: ["Progress/Indicator.vue", "Progress/Progress.vue"],
  },
  {
    name: "Radio Group",
    value: "radio-group",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-icon"],
    nuxtModules: ["nuxt-icon"],
    files: ["RadioGroup/Indicator.vue", "RadioGroup/Item.vue", "RadioGroup/RadioGroup.vue"],
  },
  {
    name: "Scroll Area",
    value: "scroll-area",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: [
      "ScrollArea/Corner.vue",
      "ScrollArea/ScrollArea.vue",
      "ScrollArea/Scrollbar.vue",
      "ScrollArea/Thumb.vue",
      "ScrollArea/Viewport.vue",
    ],
  },
  {
    name: "Select",
    value: "select",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["tailwindcss-animate", "nuxt-lodash", "nuxt-icon"],
    nuxtModules: ["nuxt-lodash", "nuxt-icon"],
    files: [
      "Select/Arrow.vue",
      "Select/Content.vue",
      "Select/Group.vue",
      "Select/Icon.vue",
      "Select/Item.vue",
      "Select/ItemIndicator.vue",
      "Select/ItemText.vue",
      "Select/Label.vue",
      "Select/Portal.vue",
      "Select/ScrollDownButton.vue",
      "Select/ScrollUpButton.vue",
      "Select/Select.vue",
      "Select/Separator.vue",
      "Select/Trigger.vue",
      "Select/Value.vue",
      "Select/Viewport.vue",
    ],
  },
  {
    name: "Separator",
    value: "separator",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-lodash"],
    nuxtModules: ["nuxt-lodash"],
    files: ["Separator.vue"],
  },
  {
    name: "Sheet",
    value: "sheet",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: ["nuxt-icon"],
    nuxtModules: ["nuxt-icon"],
    files: [
      "Sheet/Close.vue",
      "Sheet/Content.vue",
      "Sheet/Description.vue",
      "Sheet/Footer.vue",
      "Sheet/Header.vue",
      "Sheet/Overlay.vue",
      "Sheet/Portal.vue",
      "Sheet/Sheet.vue",
      "Sheet/Title.vue",
      "Sheet/Trigger.vue",
      "Sheet/X.vue",
    ],
  },
  {
    name: "Skeleton",
    value: "skeleton",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: ["Skeleton.vue"],
  },
  {
    name: "Slider",
    value: "slider",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: ["Slider/Range.vue", "Slider/Slider.vue", "Slider/Thumb.vue", "Slider/Track.vue"],
  },
  {
    name: "Switch",
    value: "switch",
    deps: ["radix-vue", "tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: ["Switch/Switch.vue", "Switch/Thumb.vue"],
  },
  {
    name: "Table",
    value: "table",
    deps: ["tailwind-variants"],
    devDeps: [],
    nuxtModules: [],
    files: [
      "Table/Body.vue",
      "Table/Caption.vue",
      "Table/Cell.vue",
      "Table/Empty.vue",
      "Table/Footer.vue",
      "Table/Head.vue",
      "Table/Header.vue",
      "Table/Row.vue",
      "Table/Table.vue",
    ],
  },
  {
    name: "Tabs",
    value: "tabs",
    deps: ["tailwind-variants", "radix-vue"],
    devDeps: [],
    nuxtModules: [],
    files: ["Tabs/Content.vue", "Tabs/List.vue", "Tabs/Tabs.vue", "Tabs/Trigger.vue"],
  },
  {
    name: "Tanstack Table",
    value: "tanstacktable",
    deps: ["tailwind-variants", "@tanstack/vue-table"],
    devDeps: ["nuxt-icon"],
    nuxtModules: ["nuxt-icon"],
    components: ["checkbox"],
    files: ["TanStackTable.vue"],
  },
  {
    name: "Textarea",
    value: "textarea",
    deps: ["tailwind-variants", "radix-vue"],
    devDeps: ["@vueuse/core", "@vueuse/nuxt"],
    nuxtModules: ["@vueuse/nuxt"],
    files: ["Textarea.vue"],
  },
  {
    name: "Toast",
    value: "toast",
    deps: ["tailwind-variants", "radix-vue"],
    devDeps: ["nuxt-icon"],
    nuxtModules: ["nuxt-icon"],
    composables: ["toast.ts"],
    files: [
      "Toast/Action.vue",
      "Toast/Close.vue",
      "Toast/Description.vue",
      "Toast/Provider.vue",
      "Toast/Title.vue",
      "Toast/Toast.vue",
      "Toast/Viewport.vue",
    ],
  },
  {
    name: "Toggle",
    value: "toggle",
    deps: ["tailwind-variants", "radix-vue"],
    devDeps: [],
    nuxtModules: [],
    files: ["Toggle.vue"],
  },
  {
    name: "Tooltip",
    value: "tooltip",
    deps: ["tailwind-variants", "radix-vue"],
    devDeps: [],
    nuxtModules: [],
    files: [
      "Tooltip/Arrow.vue",
      "Tooltip/Content.vue",
      "Tooltip/Portal.vue",
      "Tooltip/Provider.vue",
      "Tooltip/Tooltip.vue",
      "Tooltip/Trigger.vue",
    ],
  },
  {
    name: "Vue Sonner",
    value: "vue-sonner",
    deps: ["vue-sonner"],
    devDeps: [],
    nuxtModules: [],
    nuxtConfig: [
      '"imports": {\n  "imports": [\n    { "from": "vue-sonner", "name": "toast", "as": "useSonner" }\n  ]\n}\n',
      'build: {\n  transpile: ["vue-sonner"],\n},\n\n',
    ],
    instructions: [
      "Remember to add the import statement and add vue-sonner to your transpile array in your nuxt.config.js file",
    ],
    files: ["VueSonner.client.vue"],
  },
  {
    name: "VeeCheckbox",
    value: "vue-checkbox",
    deps: ["@vee-validate/nuxt", "radix-vue", "@morev/vue-transitions", "tailwind-variants"],
    askValidator: true,
    devDeps: ["nuxt-icon"],
    nuxtModules: ["@vee-validate/nuxt", "@morev/vue-transitions/nuxt", "nuxt-icon"],
    components: ["checkbox", "label"],
    files: ["Vee/Checkbox.vue"],
  },
  {
    name: "VeeFileInput",
    value: "vue-file-input",
    deps: ["@vee-validate/nuxt", "radix-vue", "@morev/vue-transitions", "tailwind-variants"],
    askValidator: true,
    devDeps: ["nuxt-icon"],
    nuxtModules: ["@vee-validate/nuxt", "@morev/vue-transitions/nuxt", "nuxt-icon"],
    components: ["input", "label"],
    files: ["Vee/FileInput.vue"],
  },
  {
    name: "VeeInput",
    value: "vue-input",
    deps: ["@vee-validate/nuxt", "radix-vue", "@morev/vue-transitions", "tailwind-variants"],
    askValidator: true,
    devDeps: ["nuxt-icon"],
    nuxtModules: ["@vee-validate/nuxt", "@morev/vue-transitions/nuxt", "nuxt-icon"],
    components: ["input", "label"],
    files: ["Vee/Input.vue"],
  },
  {
    name: "VeeRadioGroup",
    value: "vue-radio-group",
    deps: ["@vee-validate/nuxt", "radix-vue", "@morev/vue-transitions", "tailwind-variants"],
    askValidator: true,
    devDeps: ["nuxt-icon"],
    nuxtModules: ["@vee-validate/nuxt", "@morev/vue-transitions/nuxt", "nuxt-icon"],
    components: ["radio-group", "label"],
    files: ["Vee/RadioGroup.vue"],
  },
  {
    name: "VeeSelect",
    value: "vue-select",
    deps: ["@vee-validate/nuxt", "radix-vue", "@morev/vue-transitions", "tailwind-variants"],
    askValidator: true,
    devDeps: ["nuxt-icon"],
    nuxtModules: ["@vee-validate/nuxt", "@morev/vue-transitions/nuxt", "nuxt-icon"],
    components: ["native-select", "label"],
    files: ["Vee/Select.vue"],
  },
  {
    name: "VeeTextarea",
    value: "vue-textarea",
    deps: ["@vee-validate/nuxt", "radix-vue", "@morev/vue-transitions", "tailwind-variants"],
    askValidator: true,
    devDeps: ["nuxt-icon"],
    nuxtModules: ["@vee-validate/nuxt", "@morev/vue-transitions/nuxt", "nuxt-icon"],
    components: ["textarea", "label"],
    files: ["Vee/Textarea.vue"],
  },
];
