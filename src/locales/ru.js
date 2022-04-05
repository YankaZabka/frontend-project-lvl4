export default {
  translation: {
    buttons: {
      exit: 'Выйти',
      login: 'Войти',
      signup: 'Зарегистрироваться',
      remove: 'Удалить',
      rename: 'Отправить',
      cancel: 'Отменить',
      confirm: 'Подтвердить',
      create: 'Отправить',
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
      username: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      errors: {
        required: 'Обязательное поле',
        server: 'Пользователь с таким именем уже существует!',
        username: 'От 3 до 20 символов',
        password: 'Не менее 6 символов',
        confirmPassword: 'Пароли должны совпадать',
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
      error: 'Ошибка соединения',
      add: 'Канал успешно создан!',
      remove: 'Канал успешно удален!',
      rename: 'Канал успешно переименован!',
    },
  },
};
