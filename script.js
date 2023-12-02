//your JS code here. If required.
function changeColors(currentSquare) {
            var squares = document.querySelectorAll('.lavender');
            for (var i = 0; i < squares.length; i++) {
                if (squares[i].id !== currentSquare) {
                    squares[i].classList.add('coffee');
                }
            }
        }

        function restoreColors(currentSquare) {
            var squares = document.querySelectorAll('.lavender');
            for (var i = 0; i < squares.length; i++) {
                if (squares[i].id !== currentSquare) {
                    squares[i].classList.remove('coffee');
                }
            }
        }