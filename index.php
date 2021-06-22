<?php

include_once("index.html");

$rdi = new RecursiveDirectoryIterator(".");
$rii = new RecursiveIteratorIterator($rdi);
$ri = new RegexIterator($rii, "/^.+.html$/i", RecursiveRegexIterator::GET_MATCH);
$ri->replacement = 'menu:$1';
$i = iterator_to_array($ri);

$arrayJson = array(
    "nome"  => "joao",
    "idade" => 35
  );

  

function getFileList($directory, $recursive = false)
 {
     $recursiveIteratorIterator = new \RegexIterator(new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator(rtrim($this->rootPath . '/' . $directory, '/')), \RecursiveIteratorIterator::SELF_FIRST), '/^((?!thumb(_[a-z]+)?).)*$/');
     $jsonFileArray = array();
     $thumbnailList = UploaderConfiguration::getInstance()->getThumbnails();
     foreach ($recursiveIteratorIterator as $file) {
         /**
          * @var $file \SplFileInfo
          */
         $extension = 'Dir';
         if (!$file->isDir()) {
             $extension = ucfirst(pathinfo($file->getFilename(), PATHINFO_EXTENSION));
         }
         // filters
         if ($file->getFilename() == '.' || $file->getFilename() == 'index.php' || 0 === strpos($file->getFilename(), '.')) {
             continue;
         }
         // set preview if image
         $preview = 'none';
         $thumbnails = array();
         if ($this->isImage($extension)) {
             $thumbnails = $this->getThumbnails($thumbnailList, $extension, $file, $thumbnails);
             $preview = current($thumbnails);
             if (!file_exists($this->cx->getWebsitePath() . $preview)) {
                 $preview = '';
             }
         }
         $fileInfos = array('filepath' => mb_strcut($file->getPath() . '/' . $file->getFilename(), mb_strlen($this->cx->getWebsitePath())), 'name' => $file->getFilename(), 'size' => $this->formatBytes($file->getSize()), 'cleansize' => $file->getSize(), 'extension' => ucfirst(mb_strtolower($extension)), 'preview' => $preview, 'active' => false, 'type' => $file->getType(), 'thumbnail' => $thumbnails);
         // filters
         if ($fileInfos['name'] == '.' || preg_match('/\\.thumb/', $fileInfos['name']) || $fileInfos['name'] == 'index.php' || 0 === strpos($fileInfos['name'], '.')) {
             continue;
         }
         $path = array($file->getFilename() => array('datainfo' => $fileInfos));
         for ($depth = $recursiveIteratorIterator->getDepth() - 1; $depth >= 0; $depth--) {
             $path = array($recursiveIteratorIterator->getSubIterator($depth)->current()->getFilename() => $path);
         }
         $jsonFileArray = array_merge_recursive($jsonFileArray, $path);
     }
     return $jsonFileArray;
 }





?>

<script>
// const data = <?php echo json_encode($arrayJson) ?>;
// console.log(data);
</script>