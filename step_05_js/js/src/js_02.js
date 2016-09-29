var sat, meeting, diner, go;
thu=true;
meeting=true;
dinner=false;
done_go= !!thu || (meeting|| !dinner);

console.log(done_go);