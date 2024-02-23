interface IMenuContextItem {
  label: string;
  icon: string;
  iconColor?: string;
  hotkey: string;
}

export const menuContextItems: IMenuContextItem[] = [
  {
    label: 'Выделить всё',
    icon: 'highlight',
    iconColor: 'text-success-500',
    hotkey: 'Ctrl+Shift+A'
  },
  {
    label: 'Снять все выделения',
    icon: 'delete-highlight',
    iconColor: 'text-error-500',
    hotkey: 'Ctrl+Shift+del'
  },
  {
    label: 'Перейти в эту группу',
    icon: 'to-group',
    hotkey: 'Enter'
  },
  {
    label: 'Выделить дочерние группы',
    icon: 'data-flow',
    hotkey: 'Ctrl+Shift+Enter'
  },
  {
    label: 'Выделить группы на том же уровне',
    icon: 'dot-points',
    hotkey: 'Ctrl+Shift+1'
  },
  {
    label: 'Переименовать',
    icon: 'edit',
    hotkey: 'F2'
  },
  {
    label: 'Добавить в быстрый доступ',
    icon: 'bookmark-add',
    hotkey: 'F3'
  },
  {
    label: 'Создать подгруппу',
    icon: 'plus',
    hotkey: 'Ctrl+Enter'
  },
  {
    label: 'Копировать выделенные группы',
    icon: 'copy',
    hotkey: 'Ctrl+Shift+C'
  },
  {
    label: 'Вырезать выделенные группы',
    icon: 'cut',
    hotkey: 'Ctrl+Shift+V'
  },
  {
    label: 'Скрыть выделенные группы',
    icon: 'eye-off',
    hotkey: 'Ctrl+Shift+H'
  },
  {
    label: 'Развернуть/свернуть все группы',
    icon: 'layers-three',
    hotkey: 'Shift+E'
  },
  {
    label: 'Редактировать структуру',
    icon: 'code-snippet',
    hotkey: 'Shift+R'
  },
  {
    label: 'Копировать заголовки всех групп',
    icon: 'heading',
    hotkey: 'Ctrl+C'
  },
  {
    label: 'Удалить выделенные группы',
    icon: 'trash',
    iconColor: 'text-error-500',
    hotkey: 'Del'
  }
];
