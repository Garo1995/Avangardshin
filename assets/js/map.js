

ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [40.298628, 44.362043],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'ք. Աշտարակ, Ներսես Աշտարակեցի',
            balloonContent: 'ք. Աշտարակ, Ներսես Աշտարակեցի'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/img/logo.svg',
            // Размеры метки.
            iconImageSize: [120, 75],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -45]
        })

    myMap.geoObjects
        .add(myPlacemark)
});