// default_saved_searches.js - Pre-defined SPL Templates
// Extracted for easier maintenance and addition of new templates

(function(global) {
  global.SPABOT_DEFAULT_SAVED_SEARCHES = [
    { 
        name: 'General Rule Template', 
        group: 'Rule',
        value: `\`\`\`@@META| 
Rule Name: 
Author: 
Updated:  
Description: 
Resource: 
\`\`\`  

\`\`\`@@GUIDE| 
Investigation Guide: 

\`\`\`  

\`\`\` ========== Filter ========== \`\`\` 
earliest=-23m@m latest=-3m@m 
index=golden-gate-active-directory 
\`\`\`@@NOTE| Here are the note contents.\`\`\`  

\`\`\` ========== Incident properties ========== \`\`\` 
| eval 
    data_source="windows", 
    start_time=start_time, 
    end_time=end_time, 
    event_type="hids_events", 
    rule_id="c0749df9-289d-49e9-a087-4a2edc4e5547", 
    rule_name="", 
    description="", 
    severity="", 
    tactics="", 
    owner="", 
    body=json_object( 
    "host.name", field, 
    "host.user.name", field, 
    "host.user.id", field, 
    "event.time", field, 
    "event.code", field, 
    "event.category", field, 
    "event.action", field, 
    "event.original", field, 
    "user.name", field, 
    "user.id", field, 
    "user.logon_type", field, 
    "user.logon_type_description", field, 
    "process.name", field, 
    "source.ip", field, 
    "source.port", field, 
    "source.workstation", field 
    ), 
    ext_content=json_object() 

    \`\`\` ========== Output ========== \`\`\` 
\`threat_detection_alert_process_v2(pre)\``
    }
  ];
})(window);
