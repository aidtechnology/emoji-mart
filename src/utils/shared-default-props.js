const EmojiDefaultProps = {
  skin: 1,
  //set: 'apple',
  sheetSize: 48,
  sheetColumns: 85, //REMEMBER TO CHANGE THIS NUMBER!!
  sheetRows: 128, //REMEMBER TO CHANGE THIS NUMBER!!
  native: false,
  forceSize: false,
  tooltip: false,
  backgroundImageFn: (set, sheetSize) =>
    'http://localhost:5000/spritesheet.png',
}

const PickerDefaultProps = {
  onClick: (data) => {
    console.log(data)
  },
  onSelect: (data) => {
    console.log(data)
  },
  onSkinChange: (data) => {
    console.log(data)
  },
  emojiSize: 64,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  native: EmojiDefaultProps.native,
  sheetSize: EmojiDefaultProps.sheetSize,
  backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  showSkinTones: true,
  emojiTooltip: EmojiDefaultProps.tooltip,
  autoFocus: false,
  custom: [],
  skinEmoji: '',
  notFound: () => {},
  notFoundEmoji: 'sleuth_or_spy',
  icons: {},
}

export { PickerDefaultProps, EmojiDefaultProps }
