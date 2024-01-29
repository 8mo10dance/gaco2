<?php

namespace App\Http\Controllers;

use Google\Cloud\BigQuery\BigQueryClient;
use Illuminate\Http\Request;

class BigQueryController extends Controller
{
    protected $bigQuery;

    public function __construct(BigQueryClient $bigQuery)
    {
        $this->bigQuery = $bigQuery;
    }

    public function queryBigQuery()
    {
        $query = 'SELECT id, name FROM `test.dataset1.table_a` WHERE id = 1';
        $queryJobConfig = $this->bigQuery->query($query);
        $results = $this->bigQuery->runQuery($queryJobConfig);

        $data = [];
        foreach ($results as $row) {
            $data[] = $row;
        }

        return response()->json($data);
    }
}
