import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentLinkOutButton extends Struct.ComponentSchema {
  collectionName: 'components_component_link_out_buttons';
  info: {
    displayName: 'Link Out Button';
  };
  attributes: {
    Is_External: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalMeta extends Struct.ComponentSchema {
  collectionName: 'components_global_metas';
  info: {
    displayName: 'Meta';
  };
  attributes: {
    Description: Schema.Attribute.String;
    OG_Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    Background_Image: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    LinkOutButton: Schema.Attribute.Component<
      'component.link-out-button',
      false
    >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.link-out-button': ComponentLinkOutButton;
      'global.meta': GlobalMeta;
      'section.hero': SectionHero;
    }
  }
}
