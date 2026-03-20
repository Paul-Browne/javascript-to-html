export const GLOBAL_OVERRIDES = {
  id: {
    type: 'string',
    description: 'id attribute',
  },
  class: {
    type: 'string',
    description: 'class attribute',
  },
  style: {
    type: 'string',
    description: 'style attribute',
  },
  lang: {
    type: 'string',
    description: 'lang attribute',
  },
  dir: {
    type: "'ltr' | 'rtl' | 'auto' | (string & {})",
    description: 'dir attribute',
  },
  title: {
    type: 'string',
    description: 'title attribute',
  },
  tabindex: {
    type: 'number',
    description: 'tabindex attribute',
  },
  role: {
    type: 'string',
    description: 'role attribute',
  },
  slot: {
    type: 'string',
    description: 'slot attribute',
  },
  draggable: {
    type: 'boolean',
    description: 'draggable attribute',
  },
  contenteditable: {
    type: 'boolean',
    description: 'contenteditable attribute',
  },
  spellcheck: {
    type: 'boolean',
    description: 'spellcheck attribute',
  },
  popover: {
    type: 'boolean',
    description: 'popover attribute',
  },
  nonce: {
    type: 'string',
    description: 'nonce attribute',
  },
  autocapitalize: {
    type: "'none' | 'on' | 'off' | 'sentences' | 'words' | 'characters' | (string & {})",
    description: 'autocapitalize attribute',
  },
  translate: {
    type: 'boolean',
    description: 'translate attribute',
  },
  hidden: {
    type: 'boolean',
    description: 'hidden attribute',
  },
  onclick: {
    type: 'string',
    description: 'click handler',
  },
};

export const TAG_OVERRIDES = {
  a: {
    target: {
      type: "'_self' | '_blank' | '_parent' | '_top' | (string & {})",
      description: 'target browsing context',
    },
    rel: {
      type: "'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noopener' | 'noreferrer' | 'prev' | 'search' | 'tag' | (string & {})",
      description: 'link relationship',
    },
  },
  img: {
    loading: {
      type: "'lazy' | 'eager' | (string & {})",
      description: 'loading behavior',
    },
    decoding: {
      type: "'sync' | 'async' | 'auto' | (string & {})",
      description: 'decoding hint',
    },
  },
  input: {
    type: {
      type: "'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {})",
      description: 'input type',
    },
  },
  button: {
    type: {
      type: "'button' | 'submit' | 'reset'",
      description: 'button type',
    },
  },
  form: {
    method: {
      type: "'get' | 'post' | 'dialog' | (string & {})",
      description: 'HTTP method',
    },
    enctype: {
      type: "'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | (string & {})",
      description: 'form encoding type',
    },
  },
  script: {
    type: {
      type: "'module' | 'importmap' | 'application/ld+json' | (string & {})",
      description: 'script type',
    },
  },
  textarea: {
    wrap: {
      type: "'soft' | 'hard' | (string & {})",
      description: 'wrapping behavior',
    },
  },
  track: {
    kind: {
      type: "'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata' | (string & {})",
      description: 'track kind',
    },
  },
  ol: {
    type: {
      type: "'1' | 'a' | 'A' | 'i' | 'I' | (string & {})",
      description: 'list marker type',
    },
  },
  th: {
    scope: {
      type: "'row' | 'col' | 'rowgroup' | 'colgroup' | (string & {})",
      description: 'header scope',
    },
  },
  body: {
    onload: {
      type: 'string',
      description: 'onload handler',
    },
    onunload: {
      type: 'string',
      description: 'unload handler',
    }
  }
};
