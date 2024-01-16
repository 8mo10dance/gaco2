<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

try {
  $response = $client->request('GET', 'https://api.github.com/repos/guzzle/guzzle');
  echo $response->getBody();
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
}
