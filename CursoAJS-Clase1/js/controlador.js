angular.module('miApp', ['ngAnimate'])
    .controller('miCtrl1', function ($scope,$filter) {
        /* ----------- */
        /* PROPIEDADES */
        $scope.mensaje = $filter ('uppercase')('Soy el controlador 1')
        $scope.numero = $filter ('number')(4156.789,2)
        $scope.contador2 = 456
        $scope.valor = 321
        $scope.check = true
        $scope.personas = [
            'Juan',
            'Pedro',
            'Ana',
            'Maria'
        ]
        $scope.alumnos = [
            { nombre: 'Juan', apellido: 'Perez', edad: 32, curso: false, cuota: 454.25, altura: 1.85, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png' },
            { nombre: 'Pedro', apellido: 'gomez', edad: 27, curso: true, cuota: 856.25, altura: 1.65, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png' },
            { nombre: 'Ana', apellido: 'Mei', edad: 37, curso: true, cuota: 556.15, altura: 1.76, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png' },
            { nombre: 'Maria', apellido: 'Picos', edad: 23, curso: false, cuota: 456.25, altura: 1.80, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png' },
        ]
        /* METODOS */
        $scope.incrementar = function () {
            $scope.contador2++
        }
        $scope.getContador2 = function () {
            return $scope.contador2
        }
        $scope.borrarAlumnos = function (index) {
            $scope.alumnos.splice(index, 1)
        }
        $scope.agregarAlumno = function () {
            var alumno = { nombre: 'Cecilia', apellido: 'Lopez', edad: 43, curso: false, cuota: 326.25, altura: 1.76, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-512.png' }
            $scope.alumnos.unshift(alumno)
        }
        $scope.cantidadAlumnosCurso = function(){
            var cant=0

            angular.forEach($scope.alumnos, function(alumno, key){
                if (alumno.curso) cant++
            })
            return{
                cantidad: cant,
                total: $scope.alumnos.length
            }

        }
        $scope.orden = ''
        $scope.inverso = false
        $scope.campo = ''
        $scope.ordenar = function (campo){
            $scope.campo = campo
            $scope.orden = $scope.inverso ? '-': '' + campo
            $scope.inverso = !$scope.inverso
            console.log()
        }

    })

    .filter('acortar',function(){
        return function(text,max){
            if (text.length > max){
                return text.substring(0,max)+ ' ...'
            }else{
                return text
            }
        }
    })

    .filter('capitalize',function(){
        return function(text){
            return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        }
    })



    .controller('miCtrl2', function ($scope,$window) {
        $scope.mensaje = 'Soy el controlador 2'

        $window.document.getElementById('parrafo').onmouseover = function (){
            console.log('el mouse paso por aqui');
            
            /* $window.alert('El mouse paso por aqui') */
        }
    })