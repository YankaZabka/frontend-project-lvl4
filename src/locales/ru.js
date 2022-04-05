export default {
  translation: {
    buttons: {
      exit: 'Выйти',
      login: 'Войти',
      signup: 'Зарегистрироваться',
      remove: 'Удалить',
      rename: 'Переименовать',
      cancel: 'Отменить',
      confirm: 'Подтвердить',
      create: 'Создать',
    },
    login: {
      title: 'Войти',
      username: 'Ваш ник',
      password: 'Пароль',
      withoutAccount: 'Нет аккаунта?',
      link: 'Регистрация',
      errors: {
        required: 'Обязательное поле',
        server: 'Неверные имя пользователя или пароль',
      },
    },
    signup: {
      title: 'Регистрация',
      username: 'Ваш ник',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      errors: {
        required: 'Обязательное поле',
        server: 'Пользователь с таким именем уже существует!',
        usernameMin: 'Слишком короткое!',
        usernameMax: 'Слишком длинное!',
        passwordMin: 'Слишком короткий!',
        confirmPassword: 'Значения не совпадают',
      },
    },
    modals: {
      add: {
        title: 'Добавить канал',
        errors: {
          required: 'Обязательное поле',
          repeat: 'Такой канал уже существует!',
        },
      },
      remove: {
        title: 'Удалить',
        body: 'Вы уверены?',
      },
      rename: {
        title: 'Переименовать',
        errors: {
          required: 'Обязательное поле',
          repeat: 'Канал с таким именем уже существует!',
        },

      },
    },
    messages: {
      formPlaceholder: 'Введите сообщение',
      counter: {
        count_one: '{{count}} сообщение',
        count_few: '{{count}} сообщения',
        count_many: '{{count}} сообщений',
      },
    },
    channels: {
      title: 'Каналы',
    },
    notify: {
      add: 'Канал успешно создан!',
      remove: 'Канал успешно удален!',
      rename: 'Канал успешно переименован!',
    },
  },
};
