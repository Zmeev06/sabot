export interface IContentItem {
  icon: string;
  text: string;
  to: string;
  additional?: string;
}

export type ContentGroup = IContentItem[];

export const contentGroups: ContentGroup[] = [
  [
    {
      icon: 'bank',
      text: 'Баланс',
      to: '/balance',
      additional: '256 590.45 ₽'
    },
    {
      icon: 'user',
      text: 'Мой профиль',
      to: '/balance'
    },
    {
      icon: 'currency-ruble',
      text: 'Инструменты и цены',
      to: '/balance'
    }
  ],
  [
    {
      icon: 'upload-cloud',
      text: 'Импорт проектов',
      to: '/balance'
    },
    {
      icon: 'palette',
      text: 'Брендирование',
      to: '/balance'
    },
    {
      icon: 'users-plus',
      text: 'Рефералы',
      to: '/balance'
    },
    {
      icon: 'cube',
      text: 'API',
      to: '/balance'
    }
  ],
  [
    {
      icon: 'help-circle',
      text: 'Гайды и руководства',
      to: '/balance'
    },
    {
      icon: 'message-chat-square',
      text: 'Поддержка',
      to: '/balance'
    },
    {
      icon: 'file',
      text: 'Правила пользования',
      to: '/balance'
    }
  ]
];
