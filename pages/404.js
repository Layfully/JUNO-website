import ParticlesWrapper from "../components/ParticlesWrapper";
import Text from "../components/Text";
import LanguageSelector from "../components/LanguageSelector";

const FourOhFour = (props) => {
  return (
    <main className=' text-center flex flex-col items-center justify-center h-screen w-screen px-4'>
      <ParticlesWrapper />
      <h1
        className='font-bold text-orange text-9xl lg:text-16xl'
        style={{
          lineHeight: 1,
          textShadow: "4px 4px 2px rgba(150, 150, 150, 0.3)",
        }}>
        404
      </h1>
      <h2
        className='font-bold text-white text-6xl'
        style={{ textShadow: "4px 4px 2px rgba(150, 150, 150, 0.3)" }}>
        Page Not Found
      </h2>

      <Text color='white' size='h2' custom='mt-6 text-opacity-100'>
        Choose language and visit our page
      </Text>

      <LanguageSelector languageList={props.languageList} />
    </main>
  );
};
export default FourOhFour;
