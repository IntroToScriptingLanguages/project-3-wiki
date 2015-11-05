<?php

if (file_exists('wiki.txt')) {
  $content = file_get_contents('wiki.txt');
}
else {
  $content = '(no content)';
}

 ?>
