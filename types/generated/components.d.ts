import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHeroSectionV2 extends Schema.Component {
  collectionName: 'components_components_hero_section_v2s';
  info: {
    displayName: 'Hero Section V2';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsHeroSectionV1 extends Schema.Component {
  collectionName: 'components_components_hero_section_v1s';
  info: {
    displayName: 'Hero Section V1';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface TemplatesTemplate2 extends Schema.Component {
  collectionName: 'components_templates_template_2s';
  info: {
    displayName: 'Template 2';
    icon: 'folder';
  };
  attributes: {
    heroSection: Attribute.Component<'components.hero-section-v2'> &
      Attribute.Required;
  };
}

export interface TemplatesTemplate1 extends Schema.Component {
  collectionName: 'components_templates_template_1s';
  info: {
    displayName: 'Template 1';
    icon: 'folder';
    description: '';
  };
  attributes: {
    heroSectionT1: Attribute.Component<'components.hero-section-v1'> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.hero-section-v2': ComponentsHeroSectionV2;
      'components.hero-section-v1': ComponentsHeroSectionV1;
      'templates.template-2': TemplatesTemplate2;
      'templates.template-1': TemplatesTemplate1;
    }
  }
}
