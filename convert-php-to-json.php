<?php
    function arrayToJson(array $array) : string
    {
        $json = json_encode($array);
        if ($json === false) {
            throw new \RuntimeException('Unable to encode array to JSON');
        }

        return $json;
    }

    function writeJsonToDisk(string $json)
    {
        $file = fopen('acf.json', 'w');
        fwrite($file, $json);
        return fclose($file);
    }
?>