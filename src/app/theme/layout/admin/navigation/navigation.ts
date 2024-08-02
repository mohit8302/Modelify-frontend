import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Home',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'page',
    title: 'AI Model',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Create Model',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'ti ti-typography'
      },
      {
        id: 'color',
        title: 'Models',
        type: 'item',
        classes: 'nav-item',
        url: '/sample-page',
        icon: 'ti ti-brush'
      }
    ]
  },
  {
    id: 'elements',
    title: 'Garments',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'create-garmens',
        title: 'Create Garments',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
        icon: 'ti ti-typography'
      },
      {
        id: 'color',
        title: 'Upload Garments',
        type: 'item',
        classes: 'nav-item',
        url: '/upload-garments',
        icon: 'ti ti-brush'
      },
      {
        id: 'tabler',
        title: 'Stored Garments',
        type: 'item',
        classes: 'nav-item',
        url: '/stored-garments',
        icon: 'ti ti-plant-2'
      }
    ]
  },
  {
    id: 'other',
    title: 'Results',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Result Labels',
        type: 'item',
        url: '/result-label',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'document',
        title: 'Generate',
        type: 'item',
        url: '/generate',
        classes: 'nav-item',
        icon: 'ti ti-vocabulary'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
