import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const ResumeViewer = ({ formData }: any) => {
  console.log(formData);
  return (
    <Document pageMode='fullScreen'>
      <Page style={styles.body} size='A4'>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {formData.firstName} {formData.lastName}
          </Text>
          <Text style={styles.title}>{formData.title}</Text>
          {(formData.email ||
            formData.phone ||
            formData.city ||
            formData.state) && (
            <Text style={styles.contact}>
              {formData.email} | {formData.phone} | {formData.city},{' '}
              {formData.state}
            </Text>
          )}
        </View>

        {/* Summary Section */}
        {formData.summary && <Text style={styles.sectionTitle}>SUMMARY</Text>}
        <Text style={styles.paragraph}>{formData.summary}</Text>

        {formData.skills && <Text style={styles.sectionTitle}>SKILLS</Text>}
        <Text style={styles.skills}>{formData.skills}</Text>
        {/* Work Experience Section */}
        {formData.workExperience && (
          <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
        )}
        <Text style={styles.paragraph}>{formData.workExperience}</Text>

        {/* Education Section */}
        {formData.education && (
          <Text style={styles.sectionTitle}>EDUCATION</Text>
        )}
        <Text style={styles.paragraph}>{formData.education}</Text>

        {/* Skills Section */}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 35,
    fontSize: 10,
    color: '#333333',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 10,
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 12,
    marginTop: 15,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#007ACC',
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 15,
  },
  job: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  companyDate: {
    fontSize: 10,
    color: 'gray',
    marginBottom: 4,
  },
  bulletPoints: {
    marginLeft: 10,
  },
  bulletPoint: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 4,
  },
  education: {
    marginBottom: 10,
  },
  skills: {
    fontSize: 10,
    marginTop: 5,
    lineHeight: 1.5,
  },
});

export default ResumeViewer;
