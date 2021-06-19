<?php include_once("index2.html");


$listDiretorio = array_diff(
    scandir('/produtos/'),
    ['.', '..']
);

//Percorremos todos os itens da nossa lista
foreach($listDiretorio as $diretorio){
    $isDir = is_dir(''/produtos/' . $diretorio) ? 'Diretório' : 'Arquivo';

    echo "<p>{$diretorio} - {$isDir}</p>";
}

?>