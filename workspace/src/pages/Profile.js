import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const prof = ['John Tse','4.5',['Fixing','Cleaning','Making'],'A cool guy',['Good worker','Quick Worker']]



function Profile() {

 return(
    
    
        <Tabs>
            <h1>{prof[0]}({prof[1]})</h1>
          <TabList>
            <Tab>Skills</Tab>
            <Tab>About</Tab>
            <Tab>Reviews</Tab>
          </TabList>
      
          <TabPanel>
            <h2>{prof[2].map((item, i) => <div key={i}>{item}</div>)}</h2>
          </TabPanel>
          <TabPanel>
            <h2>{prof[3]}</h2>
          </TabPanel>
          <TabPanel>
          <h2>{prof[4].map((item, i) => <div key={i}>{item}</div>)}</h2>
          </TabPanel>
        </Tabs>
      );
  }

export default Profile;