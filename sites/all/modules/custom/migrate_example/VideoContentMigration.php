<?php
/**
 *
 */

class VideoContentMigration extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    // Source
    $columns = array(
      0 => array('id', 'User ID'),
      3 => array('fname', 'First Name'),
      4 => array('lname', 'Last Name'),
    );
    $this->source = new MigrateSourceCSV('/path/to/myfile.csv', $columns);

    // Destination
    $this->destination = new MigrateDestinationNode('page');

    // Key schema
    $source_key_schema = array(
      'nid' => array(
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
      )
    );
    $this->map = new MigrateSQLMap($this->machineName, $source_key_schema, MigrateDestinationNode::getKeySchema());

    // Mapping
    $this->addFieldMapping('title', 'title');

  }
}

