import TopBar from '../components/TopBar';
import Header from '../components/Header';
import ProblemStatements from '../components/ProblemStatements';
import Footer from '../components/Footer';
import Committee from '../components/Committee';

const ProblemStatementsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
    <div className="pt-8 lg:pt-12">
          <Committee />
        </div>
      
      <Footer />
    </div>
  );
};

export default ProblemStatementsPage;
