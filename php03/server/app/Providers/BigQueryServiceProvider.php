<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Google\Cloud\BigQuery\BigQueryClient;

class BigQueryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(BigQueryClient::class, function ($app) {
            return new BigQueryClient([
                'projectId' => env('BIGQUERY_PROJECT_ID'),
                'restOptions' => [
                    'base_uri' => env('BIGQUERY_EMULATOR_HOST')
                ],
                'useApplicationDefaultCredentials' => false
            ]);
        });
    }
}
