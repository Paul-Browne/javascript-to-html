// AUTO-GENERATED — DO NOT EDIT

export type HtmlText = string | number | boolean | null | undefined;
export type HtmlChild = HtmlText;
export type HtmlChildren = HtmlChild[];
export type ParentArgs<T> = [attrs?: T, ...children: HtmlChildren] | HtmlChildren;

export type GlobalAttributes = {
  /** id attribute */
  "id"?: string;
  /** class attribute */
  "class"?: string;
  /** style attribute */
  "style"?: string;
  /** lang attribute */
  "lang"?: string;
  /** dir attribute */
  "dir"?: 'ltr' | 'rtl' | 'auto' | (string & {});
  /** title attribute */
  "title"?: string;
  /** tabindex attribute */
  "tabindex"?: number;
  /** role attribute */
  "role"?: string;
  /** slot attribute */
  "slot"?: string;
  /** draggable attribute */
  "draggable"?: boolean;
  /** contenteditable attribute */
  "contenteditable"?: boolean;
  /** spellcheck attribute */
  "spellcheck"?: boolean;
  /** popover attribute */
  "popover"?: boolean;
  /** nonce attribute */
  "nonce"?: string;
  /** autocapitalize attribute */
  "autocapitalize"?: 'none' | 'on' | 'off' | 'sentences' | 'words' | 'characters' | (string & {});
  /** translate attribute */
  "translate"?: boolean;
  /** hidden attribute */
  "hidden"?: boolean;
  /** click handler */
  "onclick"?: string;
  [key: string]: string | number | boolean | undefined;
};

export type ImgAttributes = GlobalAttributes & {
  "src"?: string;
  "alt"?: string;
  "width"?: number | string;
  "height"?: number | string;
  /** loading behavior */
  "loading"?: 'lazy' | 'eager' | (string & {});
  /** decoding hint */
  "decoding"?: 'sync' | 'async' | 'auto' | (string & {});
  "srcset"?: string;
  "sizes"?: string;
  "crossorigin"?: string;
  "referrerpolicy"?: string;
  "onload"?: string;
  "onerror"?: string;
};

export type AreaAttributes = GlobalAttributes & {
  "alt"?: string;
  "coords"?: string;
  "download"?: string;
  "href"?: string;
  "shape"?: string;
  "target"?: string;
  "rel"?: string;
  "referrerpolicy"?: string;
};

export type BaseAttributes = GlobalAttributes & {
  "href"?: string;
  "target"?: string;
};

export type ColAttributes = GlobalAttributes & {
  "span"?: number | string;
};

export type EmbedAttributes = GlobalAttributes & {
  "src"?: string;
  "type"?: string;
  "width"?: string;
  "height"?: string;
};

export type InputAttributes = GlobalAttributes & {
  /** input type */
  "type"?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});
  "name"?: string;
  "value"?: string;
  "placeholder"?: string;
  "checked"?: false | true;
  "disabled"?: false | true;
  "required"?: false | true;
  "minlength"?: number | string;
  "maxlength"?: number | string;
  "min"?: string;
  "max"?: string;
  "step"?: string;
  "pattern"?: string;
  "autocomplete"?: "" | "off" | "on" | "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday-day" | "bday-month" | "bday-year" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "family-name" | "given-name" | "honorific-prefix" | "honorific-suffix" | "name" | "new-password" | "one-time-code" | "organization" | "postal-code" | "street-address" | "transaction-amount" | "transaction-currency" | "username" | "email" | "tel" | "tel-area-code" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "home email" | "home tel" | "home tel-area-code" | "home tel-country-code" | "home tel-extension" | "home tel-local" | "home tel-local-prefix" | "home tel-local-suffix" | "home tel-national" | "mobile email" | "mobile tel" | "mobile tel-area-code" | "mobile tel-country-code" | "mobile tel-extension" | "mobile tel-local" | "mobile tel-local-prefix" | "mobile tel-local-suffix" | "mobile tel-national" | "work email" | "work tel" | "work tel-area-code" | "work tel-country-code" | "work tel-extension" | "work tel-local" | "work tel-local-prefix" | "work tel-local-suffix" | "work tel-national" | "additional-name webauthn" | "address-level1 webauthn" | "address-level2 webauthn" | "address-level3 webauthn" | "address-level4 webauthn" | "address-line1 webauthn" | "address-line2 webauthn" | "address-line3 webauthn" | "bday-day webauthn" | "bday-month webauthn" | "bday-year webauthn" | "cc-csc webauthn" | "cc-exp webauthn" | "cc-exp-month webauthn" | "cc-exp-year webauthn" | "cc-family-name webauthn" | "cc-given-name webauthn" | "cc-name webauthn" | "cc-number webauthn" | "cc-type webauthn" | "country webauthn" | "country-name webauthn" | "current-password webauthn" | "family-name webauthn" | "given-name webauthn" | "honorific-prefix webauthn" | "honorific-suffix webauthn" | "name webauthn" | "new-password webauthn" | "one-time-code webauthn" | "organization webauthn" | "postal-code webauthn" | "street-address webauthn" | "transaction-amount webauthn" | "transaction-currency webauthn" | "username webauthn" | "email webauthn" | "tel webauthn" | "tel-area-code webauthn" | "tel-country-code webauthn" | "tel-extension webauthn" | "tel-local webauthn" | "tel-local-prefix webauthn" | "tel-local-suffix webauthn" | "tel-national webauthn" | "home email webauthn" | "home tel webauthn" | "home tel-area-code webauthn" | "home tel-country-code webauthn" | "home tel-extension webauthn" | "home tel-local webauthn" | "home tel-local-prefix webauthn" | "home tel-local-suffix webauthn" | "home tel-national webauthn" | "mobile email webauthn" | "mobile tel webauthn" | "mobile tel-area-code webauthn" | "mobile tel-country-code webauthn" | "mobile tel-extension webauthn" | "mobile tel-local webauthn" | "mobile tel-local-prefix webauthn" | "mobile tel-local-suffix webauthn" | "mobile tel-national webauthn" | "work email webauthn" | "work tel webauthn" | "work tel-area-code webauthn" | "work tel-country-code webauthn" | "work tel-extension webauthn" | "work tel-local webauthn" | "work tel-local-prefix webauthn" | "work tel-local-suffix webauthn" | "work tel-national webauthn" | "billing additional-name" | "billing additional-name webauthn" | "billing address-level1" | "billing address-level1 webauthn" | "billing address-level2" | "billing address-level2 webauthn" | "billing address-level3" | "billing address-level3 webauthn" | "billing address-level4" | "billing address-level4 webauthn" | "billing address-line1" | "billing address-line1 webauthn" | "billing address-line2" | "billing address-line2 webauthn" | "billing address-line3" | "billing address-line3 webauthn" | "billing bday-day" | "billing bday-day webauthn" | "billing bday-month" | "billing bday-month webauthn" | "billing bday-year" | "billing bday-year webauthn" | "billing cc-csc" | "billing cc-csc webauthn" | "billing cc-exp" | "billing cc-exp webauthn" | "billing cc-exp-month" | "billing cc-exp-month webauthn" | "billing cc-exp-year" | "billing cc-exp-year webauthn" | "billing cc-family-name" | "billing cc-family-name webauthn" | "billing cc-given-name" | "billing cc-given-name webauthn" | "billing cc-name" | "billing cc-name webauthn" | "billing cc-number" | "billing cc-number webauthn" | "billing cc-type" | "billing cc-type webauthn" | "billing country" | "billing country webauthn" | "billing country-name" | "billing country-name webauthn" | "billing current-password" | "billing current-password webauthn" | "billing family-name" | "billing family-name webauthn" | "billing given-name" | "billing given-name webauthn" | "billing honorific-prefix" | "billing honorific-prefix webauthn" | "billing honorific-suffix" | "billing honorific-suffix webauthn" | "billing name" | "billing name webauthn" | "billing new-password" | "billing new-password webauthn" | "billing one-time-code" | "billing one-time-code webauthn" | "billing organization" | "billing organization webauthn" | "billing postal-code" | "billing postal-code webauthn" | "billing street-address" | "billing street-address webauthn" | "billing transaction-amount" | "billing transaction-amount webauthn" | "billing transaction-currency" | "billing transaction-currency webauthn" | "billing username" | "billing username webauthn" | "billing email" | "billing email webauthn" | "billing tel" | "billing tel webauthn" | "billing tel-area-code" | "billing tel-area-code webauthn" | "billing tel-country-code" | "billing tel-country-code webauthn" | "billing tel-extension" | "billing tel-extension webauthn" | "billing tel-local" | "billing tel-local webauthn" | "billing tel-local-prefix" | "billing tel-local-prefix webauthn" | "billing tel-local-suffix" | "billing tel-local-suffix webauthn" | "billing tel-national" | "billing tel-national webauthn" | "billing home email" | "billing home email webauthn" | "billing home tel" | "billing home tel webauthn" | "billing home tel-area-code" | "billing home tel-area-code webauthn" | "billing home tel-country-code" | "billing home tel-country-code webauthn" | "billing home tel-extension" | "billing home tel-extension webauthn" | "billing home tel-local" | "billing home tel-local webauthn" | "billing home tel-local-prefix" | "billing home tel-local-prefix webauthn" | "billing home tel-local-suffix" | "billing home tel-local-suffix webauthn" | "billing home tel-national" | "billing home tel-national webauthn" | "billing mobile email" | "billing mobile email webauthn" | "billing mobile tel" | "billing mobile tel webauthn" | "billing mobile tel-area-code" | "billing mobile tel-area-code webauthn" | "billing mobile tel-country-code" | "billing mobile tel-country-code webauthn" | "billing mobile tel-extension" | "billing mobile tel-extension webauthn" | "billing mobile tel-local" | "billing mobile tel-local webauthn" | "billing mobile tel-local-prefix" | "billing mobile tel-local-prefix webauthn" | "billing mobile tel-local-suffix" | "billing mobile tel-local-suffix webauthn" | "billing mobile tel-national" | "billing mobile tel-national webauthn" | "billing work email" | "billing work email webauthn" | "billing work tel" | "billing work tel webauthn" | "billing work tel-area-code" | "billing work tel-area-code webauthn" | "billing work tel-country-code" | "billing work tel-country-code webauthn" | "billing work tel-extension" | "billing work tel-extension webauthn" | "billing work tel-local" | "billing work tel-local webauthn" | "billing work tel-local-prefix" | "billing work tel-local-prefix webauthn" | "billing work tel-local-suffix" | "billing work tel-local-suffix webauthn" | "billing work tel-national" | "billing work tel-national webauthn" | "shipping additional-name" | "shipping additional-name webauthn" | "shipping address-level1" | "shipping address-level1 webauthn" | "shipping address-level2" | "shipping address-level2 webauthn" | "shipping address-level3" | "shipping address-level3 webauthn" | "shipping address-level4" | "shipping address-level4 webauthn" | "shipping address-line1" | "shipping address-line1 webauthn" | "shipping address-line2" | "shipping address-line2 webauthn" | "shipping address-line3" | "shipping address-line3 webauthn" | "shipping bday-day" | "shipping bday-day webauthn" | "shipping bday-month" | "shipping bday-month webauthn" | "shipping bday-year" | "shipping bday-year webauthn" | "shipping cc-csc" | "shipping cc-csc webauthn" | "shipping cc-exp" | "shipping cc-exp webauthn" | "shipping cc-exp-month" | "shipping cc-exp-month webauthn" | "shipping cc-exp-year" | "shipping cc-exp-year webauthn" | "shipping cc-family-name" | "shipping cc-family-name webauthn" | "shipping cc-given-name" | "shipping cc-given-name webauthn" | "shipping cc-name" | "shipping cc-name webauthn" | "shipping cc-number" | "shipping cc-number webauthn" | "shipping cc-type" | "shipping cc-type webauthn" | "shipping country" | "shipping country webauthn" | "shipping country-name" | "shipping country-name webauthn" | "shipping current-password" | "shipping current-password webauthn" | "shipping family-name" | "shipping family-name webauthn" | "shipping given-name" | "shipping given-name webauthn" | "shipping honorific-prefix" | "shipping honorific-prefix webauthn" | "shipping honorific-suffix" | "shipping honorific-suffix webauthn" | "shipping name" | "shipping name webauthn" | "shipping new-password" | "shipping new-password webauthn" | "shipping one-time-code" | "shipping one-time-code webauthn" | "shipping organization" | "shipping organization webauthn" | "shipping postal-code" | "shipping postal-code webauthn" | "shipping street-address" | "shipping street-address webauthn" | "shipping transaction-amount" | "shipping transaction-amount webauthn" | "shipping transaction-currency" | "shipping transaction-currency webauthn" | "shipping username" | "shipping username webauthn" | "shipping email" | "shipping email webauthn" | "shipping tel" | "shipping tel webauthn" | "shipping tel-area-code" | "shipping tel-area-code webauthn" | "shipping tel-country-code" | "shipping tel-country-code webauthn" | "shipping tel-extension" | "shipping tel-extension webauthn" | "shipping tel-local" | "shipping tel-local webauthn" | "shipping tel-local-prefix" | "shipping tel-local-prefix webauthn" | "shipping tel-local-suffix" | "shipping tel-local-suffix webauthn" | "shipping tel-national" | "shipping tel-national webauthn" | "shipping home email" | "shipping home email webauthn" | "shipping home tel" | "shipping home tel webauthn" | "shipping home tel-area-code" | "shipping home tel-area-code webauthn" | "shipping home tel-country-code" | "shipping home tel-country-code webauthn" | "shipping home tel-extension" | "shipping home tel-extension webauthn" | "shipping home tel-local" | "shipping home tel-local webauthn" | "shipping home tel-local-prefix" | "shipping home tel-local-prefix webauthn" | "shipping home tel-local-suffix" | "shipping home tel-local-suffix webauthn" | "shipping home tel-national" | "shipping home tel-national webauthn" | "shipping mobile email" | "shipping mobile email webauthn" | "shipping mobile tel" | "shipping mobile tel webauthn" | "shipping mobile tel-area-code" | "shipping mobile tel-area-code webauthn" | "shipping mobile tel-country-code" | "shipping mobile tel-country-code webauthn" | "shipping mobile tel-extension" | "shipping mobile tel-extension webauthn" | "shipping mobile tel-local" | "shipping mobile tel-local webauthn" | "shipping mobile tel-local-prefix" | "shipping mobile tel-local-prefix webauthn" | "shipping mobile tel-local-suffix" | "shipping mobile tel-local-suffix webauthn" | "shipping mobile tel-national" | "shipping mobile tel-national webauthn" | "shipping work email" | "shipping work email webauthn" | "shipping work tel" | "shipping work tel webauthn" | "shipping work tel-area-code" | "shipping work tel-area-code webauthn" | "shipping work tel-country-code" | "shipping work tel-country-code webauthn" | "shipping work tel-extension" | "shipping work tel-extension webauthn" | "shipping work tel-local" | "shipping work tel-local webauthn" | "shipping work tel-local-prefix" | "shipping work tel-local-prefix webauthn" | "shipping work tel-local-suffix" | "shipping work tel-local-suffix webauthn" | "shipping work tel-national" | "shipping work tel-national webauthn" | (string & {});
  "accept"?: string;
  "multiple"?: false | true;
};

export type LinkAttributes = GlobalAttributes & {
  "href"?: string;
  "rel"?: string;
  "as"?: string;
  "type"?: string;
  "media"?: string;
  "crossorigin"?: string;
  "integrity"?: string;
  "referrerpolicy"?: string;
  "sizes"?: string;
  "onload"?: string;
  "onerror"?: string;
};

export type MetaAttributes = GlobalAttributes & {
  "name"?: string;
  "content"?: string;
  "httpEquiv"?: string;
};

export type SourceAttributes = GlobalAttributes & {
  "src"?: string;
  "srcset"?: string;
  "sizes"?: string;
  "type"?: string;
  "media"?: string;
};

export type TrackAttributes = GlobalAttributes & {
  "src"?: string;
  /** track kind */
  "kind"?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata' | (string & {});
  "srclang"?: string;
  "label"?: string;
  "default"?: false | true;
  "onload"?: string;
  "onerror"?: string;
};

export type AAttributes = GlobalAttributes & {
  "href"?: string;
  /** target browsing context */
  "target"?: '_self' | '_blank' | '_parent' | '_top' | (string & {});
  /** link relationship */
  "rel"?: 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noopener' | 'noreferrer' | 'prev' | 'search' | 'tag' | (string & {});
  "download"?: string;
  "hreflang"?: string;
  "referrerpolicy"?: string;
};

export type AudioAttributes = GlobalAttributes & {
  "src"?: string;
  "controls"?: false | true;
  "autoplay"?: false | true;
  "loop"?: false | true;
  "muted"?: false | true;
  "preload"?: "" | "none" | "metadata" | "auto";
};

export type BodyAttributes = GlobalAttributes & {
  /** onload handler */
  "onload"?: string;
  /** unload handler */
  "onunload"?: string;
};

export type ButtonAttributes = GlobalAttributes & {
  /** button type */
  "type"?: 'button' | 'submit' | 'reset';
  "disabled"?: false | true;
  "name"?: string;
  "value"?: string;
  "autofocus"?: false | true;
};

export type CanvasAttributes = GlobalAttributes & {
  "width"?: number | string;
  "height"?: number | string;
};

export type ColgroupAttributes = GlobalAttributes & {
  "span"?: number | string;
};

export type DataAttributes = GlobalAttributes & {
  "value"?: string;
};

export type FieldsetAttributes = GlobalAttributes & {
  "disabled"?: false | true;
  "name"?: string;
};

export type FormAttributes = GlobalAttributes & {
  "action"?: string;
  /** HTTP method */
  "method"?: 'get' | 'post' | 'dialog' | (string & {});
  /** form encoding type */
  "enctype"?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | (string & {});
  "autocomplete"?: "" | "off" | "on";
  "novalidate"?: false | true;
  "target"?: string;
};

export type IframeAttributes = GlobalAttributes & {
  "src"?: string;
  "name"?: string;
  "width"?: string;
  "height"?: string;
  "loading"?: "eager" | "lazy";
  "allow"?: string;
  "allowfullscreen"?: false | true;
  "referrerpolicy"?: "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  "onload"?: string;
  "onerror"?: string;
};

export type LabelAttributes = GlobalAttributes & {
  "for"?: string;
};

export type LiAttributes = GlobalAttributes & {
  "value"?: number | string;
};

export type MapAttributes = GlobalAttributes & {
  "name"?: string;
};

export type MeterAttributes = GlobalAttributes & {
  "value"?: number | string;
  "min"?: number | string;
  "max"?: number | string;
  "low"?: number | string;
  "high"?: number | string;
  "optimum"?: number | string;
};

export type ObjectAttributes = GlobalAttributes & {
  "data"?: string;
  "type"?: string;
  "name"?: string;
  "width"?: string;
  "height"?: string;
};

export type OlAttributes = GlobalAttributes & {
  "start"?: number | string;
  "reversed"?: false | true;
  /** list marker type */
  "type"?: '1' | 'a' | 'A' | 'i' | 'I' | (string & {});
};

export type OptgroupAttributes = GlobalAttributes & {
  "disabled"?: false | true;
  "label"?: string;
};

export type OptionAttributes = GlobalAttributes & {
  "value"?: string;
  "selected"?: false | true;
  "disabled"?: false | true;
  "label"?: string;
};

export type OutputAttributes = GlobalAttributes & {
  "name"?: string;
};

export type ProgressAttributes = GlobalAttributes & {
  "value"?: number | string;
  "max"?: number | string;
};

export type ScriptAttributes = GlobalAttributes & {
  "src"?: string;
  /** script type */
  "type"?: 'module' | 'importmap' | 'application/ld+json' | (string & {});
  "async"?: false | true;
  "defer"?: false | true;
  "crossorigin"?: string;
  "integrity"?: string;
  "referrerpolicy"?: string;
  "nomodule"?: false | true;
  "onload"?: string;
  "onerror"?: string;
};

export type SelectAttributes = GlobalAttributes & {
  "name"?: string;
  "multiple"?: false | true;
  "disabled"?: false | true;
  "required"?: false | true;
  "size"?: number | string;
};

export type StyleAttributes = GlobalAttributes & {
  "media"?: string;
};

export type TdAttributes = GlobalAttributes & {
  "colspan"?: number | string;
  "rowspan"?: number | string;
};

export type TextareaAttributes = GlobalAttributes & {
  "name"?: string;
  "placeholder"?: string;
  "disabled"?: false | true;
  "readonly"?: false | true;
  "required"?: false | true;
  "rows"?: number | string;
  "cols"?: number | string;
  "minlength"?: number | string;
  "maxlength"?: number | string;
  /** wrapping behavior */
  "wrap"?: 'soft' | 'hard' | (string & {});
};

export type ThAttributes = GlobalAttributes & {
  /** header scope */
  "scope"?: 'row' | 'col' | 'rowgroup' | 'colgroup' | (string & {});
  "colspan"?: number | string;
  "rowspan"?: number | string;
  "abbr"?: string;
};

export type TimeAttributes = GlobalAttributes & {
  "datetime"?: string;
};

export type VideoAttributes = GlobalAttributes & {
  "src"?: string;
  "controls"?: false | true;
  "autoplay"?: false | true;
  "loop"?: false | true;
  "muted"?: false | true;
  "playsinline"?: false | true;
  "preload"?: "" | "none" | "metadata" | "auto";
  "poster"?: string;
  "width"?: number | string;
  "height"?: number | string;
};


export function img(attrs?: ImgAttributes): string;
export function area(attrs?: AreaAttributes): string;
export function base(attrs?: BaseAttributes): string;
export function br(attrs?: GlobalAttributes): string;
export function col(attrs?: ColAttributes): string;
export function embed(attrs?: EmbedAttributes): string;
export function hr(attrs?: GlobalAttributes): string;
export function input(attrs?: InputAttributes): string;
export function link(attrs?: LinkAttributes): string;
export function meta(attrs?: MetaAttributes): string;
export function param(attrs?: GlobalAttributes): string;
export function source(attrs?: SourceAttributes): string;
export function track(attrs?: TrackAttributes): string;
export function wbr(attrs?: GlobalAttributes): string;
export function a(...args: ParentArgs<AAttributes>): string;
export function abbr(...args: ParentArgs<GlobalAttributes>): string;
export function address(...args: ParentArgs<GlobalAttributes>): string;
export function article(...args: ParentArgs<GlobalAttributes>): string;
export function aside(...args: ParentArgs<GlobalAttributes>): string;
export function audio(...args: ParentArgs<AudioAttributes>): string;
export function b(...args: ParentArgs<GlobalAttributes>): string;
export function bdi(...args: ParentArgs<GlobalAttributes>): string;
export function bdo(...args: ParentArgs<GlobalAttributes>): string;
export function blockquote(...args: ParentArgs<GlobalAttributes>): string;
export function body(...args: ParentArgs<BodyAttributes>): string;
export function button(...args: ParentArgs<ButtonAttributes>): string;
export function canvas(...args: ParentArgs<CanvasAttributes>): string;
export function caption(...args: ParentArgs<GlobalAttributes>): string;
export function cite(...args: ParentArgs<GlobalAttributes>): string;
export function code(...args: ParentArgs<GlobalAttributes>): string;
export function colgroup(...args: ParentArgs<ColgroupAttributes>): string;
export function data(...args: ParentArgs<DataAttributes>): string;
export function datalist(...args: ParentArgs<GlobalAttributes>): string;
export function dd(...args: ParentArgs<GlobalAttributes>): string;
export function del(...args: ParentArgs<GlobalAttributes>): string;
export function details(...args: ParentArgs<GlobalAttributes>): string;
export function dfn(...args: ParentArgs<GlobalAttributes>): string;
export function dialog(...args: ParentArgs<GlobalAttributes>): string;
export function div(...args: ParentArgs<GlobalAttributes>): string;
export function dl(...args: ParentArgs<GlobalAttributes>): string;
export function dt(...args: ParentArgs<GlobalAttributes>): string;
export function em(...args: ParentArgs<GlobalAttributes>): string;
export function fieldset(...args: ParentArgs<FieldsetAttributes>): string;
export function figcaption(...args: ParentArgs<GlobalAttributes>): string;
export function figure(...args: ParentArgs<GlobalAttributes>): string;
export function footer(...args: ParentArgs<GlobalAttributes>): string;
export function form(...args: ParentArgs<FormAttributes>): string;
export function h1(...args: ParentArgs<GlobalAttributes>): string;
export function h2(...args: ParentArgs<GlobalAttributes>): string;
export function h3(...args: ParentArgs<GlobalAttributes>): string;
export function h4(...args: ParentArgs<GlobalAttributes>): string;
export function h5(...args: ParentArgs<GlobalAttributes>): string;
export function h6(...args: ParentArgs<GlobalAttributes>): string;
export function head(...args: ParentArgs<GlobalAttributes>): string;
export function header(...args: ParentArgs<GlobalAttributes>): string;
export function html(...args: ParentArgs<GlobalAttributes>): string;
export function i(...args: ParentArgs<GlobalAttributes>): string;
export function iframe(...args: ParentArgs<IframeAttributes>): string;
export function ins(...args: ParentArgs<GlobalAttributes>): string;
export function kbd(...args: ParentArgs<GlobalAttributes>): string;
export function label(...args: ParentArgs<LabelAttributes>): string;
export function legend(...args: ParentArgs<GlobalAttributes>): string;
export function li(...args: ParentArgs<LiAttributes>): string;
export function main(...args: ParentArgs<GlobalAttributes>): string;
export function map(...args: ParentArgs<MapAttributes>): string;
export function mark(...args: ParentArgs<GlobalAttributes>): string;
export function menu(...args: ParentArgs<GlobalAttributes>): string;
export function meter(...args: ParentArgs<MeterAttributes>): string;
export function nav(...args: ParentArgs<GlobalAttributes>): string;
export function noscript(...args: ParentArgs<GlobalAttributes>): string;
export function object(...args: ParentArgs<ObjectAttributes>): string;
export function ol(...args: ParentArgs<OlAttributes>): string;
export function optgroup(...args: ParentArgs<OptgroupAttributes>): string;
export function option(...args: ParentArgs<OptionAttributes>): string;
export function output(...args: ParentArgs<OutputAttributes>): string;
export function p(...args: ParentArgs<GlobalAttributes>): string;
export function picture(...args: ParentArgs<GlobalAttributes>): string;
export function pre(...args: ParentArgs<GlobalAttributes>): string;
export function progress(...args: ParentArgs<ProgressAttributes>): string;
export function q(...args: ParentArgs<GlobalAttributes>): string;
export function rp(...args: ParentArgs<GlobalAttributes>): string;
export function rt(...args: ParentArgs<GlobalAttributes>): string;
export function ruby(...args: ParentArgs<GlobalAttributes>): string;
export function s(...args: ParentArgs<GlobalAttributes>): string;
export function samp(...args: ParentArgs<GlobalAttributes>): string;
export function script(...args: ParentArgs<ScriptAttributes>): string;
export function section(...args: ParentArgs<GlobalAttributes>): string;
export function select(...args: ParentArgs<SelectAttributes>): string;
export function slot(...args: ParentArgs<GlobalAttributes>): string;
export function small(...args: ParentArgs<GlobalAttributes>): string;
export function span(...args: ParentArgs<GlobalAttributes>): string;
export function strong(...args: ParentArgs<GlobalAttributes>): string;
export function style(...args: ParentArgs<StyleAttributes>): string;
export function sub(...args: ParentArgs<GlobalAttributes>): string;
export function summary(...args: ParentArgs<GlobalAttributes>): string;
export function sup(...args: ParentArgs<GlobalAttributes>): string;
export function table(...args: ParentArgs<GlobalAttributes>): string;
export function tbody(...args: ParentArgs<GlobalAttributes>): string;
export function td(...args: ParentArgs<TdAttributes>): string;
export function template(...args: ParentArgs<GlobalAttributes>): string;
export function textarea(...args: ParentArgs<TextareaAttributes>): string;
export function tfoot(...args: ParentArgs<GlobalAttributes>): string;
export function th(...args: ParentArgs<ThAttributes>): string;
export function thead(...args: ParentArgs<GlobalAttributes>): string;
export function time(...args: ParentArgs<TimeAttributes>): string;
export function title(...args: ParentArgs<GlobalAttributes>): string;
export function tr(...args: ParentArgs<GlobalAttributes>): string;
export function u(...args: ParentArgs<GlobalAttributes>): string;
export function ul(...args: ParentArgs<GlobalAttributes>): string;
export function video(...args: ParentArgs<VideoAttributes>): string;
export function fragment(...children: HtmlChildren): string;
