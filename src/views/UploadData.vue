<template>
  <h1>CSV Upload</h1>
  <div>
    <input type="file" @change="handleFileUpload" accept=".csv" />
  </div>
</template>

<script>
import csv from 'csvtojson';

export default {
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        csv()
          .fromString(reader.result)
          .then((json) => {
            const extractedData = {
              id: json[0]['GPS ID'],
              
              title: json[0]['Salutation'],
              medicalTitle: json[0]['Titel'],
              name: json[0]['Last name'],
              firstname: json[0]['First name'],
              f3name: json[0]['3rd Name'], 
              g: json[0]['G'], 
              nickname: json[0]['Nickname'], 
              address: json[0]['Adress'],
              gps_notes: json[0]['GPS Notes'],
              person_notes: json[0]['Person Notes'],
              hospital_notes: json[0]['Hospital Notes'],
              zip_code: json[0]['Zip Code'],
              location: json[0]['Location'],
              country : json[0]['Country'],
              phone_nr: json[0]['Phone Nr'],
              fax_nr: json[0]['Fax Nr'],         
              email: json[0]['E-Mail'],
              telex: json[0]['Telex'],
              gln: json[0]['GLN'],
              zsr_nr: json[0]['ZSR-Nr.'],
              v_doc_nr: json[0]['VArztnummer'],
              e_sanita : json[0]['eSanita Nr'],
              id_hpd_ehealth: json[0]['ID HPD - eHealth Süd-Ost'],
              ar: json[0]['AR'],
              ba: json[0]['BA'],
              ma: json[0]['MA'],
              pf: json[0]['PF'],
              rg: json[0]['Rg'],
              ab: json[0]['ab'],
              blocked_from: json[0]['Blocked from'],
              blocked_until: json[0]['Blocked until'],
              created_by: json[0]['Created by'],
              created_on: json[0]['Created on'],
              modified: json[0]['Modified'],
              modified_on: json[0]['Modified on'],
              
            };

            // Send the extracted data to the server-side API
            fetch('http://localhost:3000/doctors', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(extractedData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error(error);
              });
          });
      };
    },
  },
};
</script>