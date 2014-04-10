function Piece(position) {
  this.position = position;

  //Create domElement for piece
  this.domElement = document.createElement("DIV");
  var img = document.createElement("IMG");
  img.setAttribute("src",this.imageUrl);
  domElement.appendChild(img);
  domElement.classList.add(this.getPositionClass());
}

//Position tuple (row x column, usual way)
Piece.prototype.position = [undefined,undefined];

//Constant value used for helping AI determine minimax values
Piece.prototype.value = 0;

//Image to render
Piece.prototype.imageUrl = './image/piece.png';

Piece.prototype.domElement = undefined;

Piece.prototype.getPositionClass = function()
{
  return "pos" + this.position[0] + "-" + this.position[1];
}

Piece.prototype.possibleMoves = function()
{
  //Cannot move
  var ret = Array(0);
  return ret;
}

Piece.prototype.threatens = function()
{
  //Does not threaten anything
  var ret = Array(0);
  return ret;
}

/**
 * Move the piece to the given position
 * @param position An array of length two, defined in the usual way
 **/
Piece.prototype.move = function(position)
{
  this.domElement.classList.remove(this.getPositionClass);
  this.position = position;
  this.domElement.classList.add(this.getPositionClass);
}

