# Клиентская часть приложения

## Установка зависимостей
```
npm install
```

### Запуск сервера разработки
```
npm run serve
```

### Сборка для production
```
npm run build
```


### Модель данных для product
```
0. photo - путь до фото продукта на сервере
1. name! - название продукта
2. category! - категория
3. description - описание
4. features - особенности продукта
5. weightOrVolume - масса или объём продукта продукта
6. peacesPerPack - колличестко штук в упаковке
7. price - цена за еденицу товара
8. sale - скидка(размер скидки в %, причина скидки)
9. stockBalance - статок на складе

при создании каждому товару присваивается уникальный ID - служебное поле,
не доступное для редактирования пользователю

```
