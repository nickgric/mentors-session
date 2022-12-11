# TODO LIST

- Напиши приложение хранения todo-листов.
- используй методы жизненного цикла.
- При добавлении и удалении контакта контакты сохраняются в `localStorage`.
- При загрузке приложения todo-листа, если таковые имеются, считываются с
  локального хранилища и записываются в `state`.

## Шаг 1

Приложение должно состоять из формы и списка todo-листов. На текущем шаге
реализуй добавление тудушки и отображение их списка. Применение должно сохранять
тудушки между разными сессиями (обновление страницы).

Используйте готовую структуру формы из предыдущего таска: компонент
`<SearchForm/>` принимает один проп `onSubmit` - функцию для передачи значения
инпута во время формы самбита.

``jsx <SearchFormStyled> <FormBtn type="submit"> <FiSearch size="16px" />
</FormBtn> <InputSearch
     placeholder="What do you want to write?"
     name="search"
     required
     autoFocus
   /> </SearchFormStyled>

````

`state`, хранящийся в родительском компоненте `<Todos/>`, обязательно
должен быть следующего вида.

``` bash
state = {
   todos: [],
}
````

Каждая todo должна быть объектом со свойствами `text` и `id`. Для генерации
идентификаторов используй любой подходящий пакет, например
[nanoid](https://www.npmjs.com/package/nanoid). После завершения этого шага,
Приложение должно выглядеть примерно так.

[![preview](https://i.gyazo.com/de0115918db7d989fbdc10f1744c11c3.png)](https://gyazo.com/de0115918db7d989fbdc10f1744c11c3)

### Описание компонента галереи `<Grid/>`

Список карточек тудушек. Создает компонент следующей структуры.

``jsx <Grid>{/_ Набор <GridItem ></CardItem> с тудушками _/}</Grid>

```

### Описание компонента `<GridItem/>`

Компонент элемента тудушки. Создает компонент следующей структуры.

``jsx
<GridItem>
   <Todo />
</GridItem>
```

### Описание компонента `<Todo/>`

Компонент тудушки. Создает компонент следующей структуры.

``jsx <TodoWrapper> <Text textAlign="center" marginBottom="20px"> TODO #1
</Text> <Text>Некоторый description</Text> <DeleteButton type="button">
<RiDeleteBinLine size={24} /> </DeleteButton> </TodoWrapper>

```

Корневой компонент программы будет выглядеть следующим образом.

``jsx
<SearchForm />
   <Grid>
     <GridItem>
       <Todo/>
     </GridItem>
   </Grid>
```

## Шаг 2

Расширил функционал приложения, позволив пользователю удалять ранее сохраненные
тудушки.

[![preview](https://i.gyazo.com/8bf303fed0163b544d5c2314fe1df133.gif)](https://gyazo.com/8bf303fed0163b544d5c2314fe1df133)

## Шаг 3

По желанию добавь функционал редактирования карты

Для этого необходимо использовать дополнительную форму, в которой необходимо
подставить текст. из созданной тудушки и добавить в нее две кнопки - `Cancel`
`Edit`

В `state` добавь свойства:

- `isEditing` - сигнилизующий буль или возможно включить "режим редактирования"

  > В зависимости от значения мы будем показывать либо `<SearchForm/>`, либо
  > `<EditForm/>`

- `currentTodo` - объект, который будет в себе хранить информацию о тудушке
  которую нужно отредактировать

```bash
state = {
   todos: [],
   isEditing: false,
   currentTodo: {},
}
```

### Описание компонента `<EditForm/>`

Компонент принимает несколько пропсов. Для удобства можно создать как
функциональный компонент:

- `onUpdate` – функцию для обновления тудушки
- `onCancel` – функцию для отмены редактирования
- `onChange` – функцию считывания нового значения с инпута
- `currentTodo` – тудушка, которую в настоящее время мы редактируем; нужно для
  подстановки существующего описания в инпуте, записываем в значение
  `defaultValue`

Компонент формы будет иметь следующую структуру.

``jsx <SearchFormStyled> <BtnEdit type="button">
<MdOutlineCancel size="16px" color="red" /> </BtnEdit>

   <FormBtn type="submit">
     <RiSaveLine size="16px" color="green" />
   </FormBtn>

<InputSearch
     placeholder="EDIT TODO"
     name="edit"
     required
     defaultValue={currentTodo.text}
     autoFocus
   /> </SearchFormStyled>

```

### Описание компонента `<Todo>`

В компонент тудушки добавляем кнопку для редактирования. Создает компонент следующей
структуры.

``jsx
<TodoWrapper>
   <Text textAlign="center" marginBottom="20px">
     TODO #1
   </Text>
   <Text>{text}</Text>
   <DeleteButton type="button">
     <RiDeleteBinLine size={24} />
   </DeleteButton>

   <EditButton type="button">
     <RiEdit2Line size={24} />
   </EditButton>
</TodoWrapper>
```

### Добавь функционал пошагово:

- добавь функцию, которая покажет форму редактирования, например `handleEdit`
- добавь функцию, отменит редактирование и оставит все как есть, например
  `handleCancel`
- добавь функцию, измените `state` значение `currentTodo` и добавит туда
  обновленный текст, например `handleInputEditChange(event)`
- добавь функцию, обновит стейт всех тудушек значение `todos` и добавит туда
  обновленную тудушку, например `handleInputEditChange(id,updatedTodo)`
- добавь функцию, которая по происшествию саммит добавит в `state` и обновит
  список например `handleEditFormUpdate(e)`

Превью финального результата работы приложения

[![preview](https://i.gyazo.com/57595efde1dbe5b2bd7ab49895b5343a.gif)
