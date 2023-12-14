import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        }
    },
    {
        id: 7,
        isLayout: true
    },
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 9,
        label: 'MENUITEMS.COMPETITION.TEXT',
        icon: 'bx-calendar',
        link: '/competitions',
    },
    {
        id: 10,
        label: 'MENUITEMS.MEMBER.TEXT',
        icon: 'bx-user',
        link: '/members',

    },
    {
        id: 11,
        label: 'MENUITEMS.LEVEL.TEXT',
        icon: 'bx-sort-up',
        link: '/levels'
    },
];

