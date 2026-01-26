import TopBar from '../components/TopBar';
import Header from '../components/Header';
import ProblemStatements from '../components/ProblemStatements';
import Footer from '../components/Footer';
import Registration from '../components/Registration';

const ProblemStatementsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <div className="pt-8 lg:pt-12">
          <Registration />
        </div>
      
      <Footer />
    </div>
  );
};

export default ProblemStatementsPage;
