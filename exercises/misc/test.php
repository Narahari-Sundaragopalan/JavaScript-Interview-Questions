Schema::create('import_file_types', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name');
    $table->string('table_names');
    $table->string('display_name');
    $table->string('template_location', 512)->nullable();
    $table->string('created_by')->nullable();
    $table->string('updated_by')->nullable();
    $table->timestamps();
});

Table: 'import_file_details'
    $table->integer('job_id')->nullable();
    $table->string('filename')->nullable();
    $table->integer('type_id');
    $table->string('file_location', 512)->nullable();
    $table->string('created_by')->nullable();
    $table->string('updated_by')->nullable();
    $table->timestamps();

    $table->foreign('job_id')->references('id')->on('jobs');
    $table->foreign('type_id')->references('id')->on('import_file_types')->onDelete('cascade')->onUpdate('cascade');


Table Name: 'import_csv_file_table_map'
Columns:
    'csv_column_name'
    'table_column_name'
    'table_name'
    'created_by'
    'updated_by'
    'created_date'
    'updated_date'
