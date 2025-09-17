import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "@/contexts/LanguageContext";

// Import all images as 1.jpg
import imgAdmin from "@/assets/1.jpg";
import imgTech from "@/assets/1.jpg";
import imgDev from "@/assets/1.jpg";
import imgVSat from "@/assets/1.jpg";
import imgStore from "@/assets/1.jpg";
import imgCommittee from "@/assets/1.jpg";
import imgTest from "@/assets/1.jpg";
import imgCentral from "@/assets/1.jpg";
import imgCipher from "@/assets/1.jpg";
import imgLicense from "@/assets/1.jpg";
import imgTraffic from "@/assets/1.jpg";

export default function OfficersHQ() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const SectionCard = ({ title, img, incharge, content }) => (
    <Card className="overflow-hidden shadow-xl border-none hover:shadow-2xl transition-all duration-500 rounded-3xl">
      <img src={img} alt={title} className="w-full h-64 object-cover" />
      <CardContent className="p-8 space-y-6">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
          {t(title)}
        </h2>
        {incharge && (
          <p className="text-lg italic text-gray-700">
            <span className="font-semibold not-italic">{t("inCharge")}: </span> {t(incharge)}
          </p>
        )}
        <div>{content}</div>
      </CardContent>
    </Card>
  );

  const renderList = (items) => (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
          <span className="text-gray-800 text-base leading-relaxed">{t(item)}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all duration-300 text-sm font-medium text-violet-700 mb-8 shadow"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backToHome")}
        </button>

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-md">
          {t("officersInHQ")}
        </h1>

        {/* 1. Administrative Office */}
        <SectionCard
          title="administrativeOffice"
          img={imgAdmin}
          incharge="officeSuperintendent"
          content={
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="a">
                <AccordionTrigger>{t("branchA")}</AccordionTrigger>
                <AccordionContent>
                  {renderList([
                    "rti",
                    "yearlyAdminReport",
                    "budgetInspection",
                    "bmiQuarters",
                    "billPaymentOrder",
                  ])}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>{t("branchB")}</AccordionTrigger>
                <AccordionContent>
                  {renderList([
                    "welfareIncomeTaxGST",
                    "accountsPension",
                  ])}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="e">
                <AccordionTrigger>{t("branchE")}</AccordionTrigger>
                <AccordionContent>
                  {renderList([
                    "matCases",
                    "enquiriesWireless",
                    "pcPsiGradation",
                    "promotionsTransfers",
                    "serviceSheets",
                    "vacancyStatements",
                    "classificationExams",
                    "recruitmentRR",
                  ])}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="d">
                <AccordionTrigger>{t("branchD")}</AccordionTrigger>
                <AccordionContent>
                  {renderList([
                    "procurementSpares",
                    "tenderProcessWireless",
                  ])}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          }
        />

        {/* 2. Technical Branch */}
        <SectionCard
          title="technicalBranch"
          img={imgTech}
          incharge="dyspAdmin"
          content={renderList([
            "supervisesDailyWork",
            "adminBranches",
            "technicalBranches",
            "bandobastBranch",
            "planningBranch",
            "homePI",
            "welfareBranch",
            "sssBranch",
          ])}
        />

        {/* 3. Development Section */}
        <SectionCard
          title="developmentSection"
          img={imgDev}
          incharge=""
          content={renderList([
            "computerSection",
            "radioCommunication",
            "lineCommunication",
            "electricalSection",
            "installationBranch",
            "storeSection",
          ])}
        />

        {/* 4. V-SAT Section */}
        <SectionCard
          title="vsatSection"
          img={imgVSat}
          incharge="dysp"
          content={renderList([
            "monitorPolnetStations",
            "guidancePolnetUnits",
            "smoothPolnetOperation",
            "specificationsPolnetCCTV",
          ])}
        />

        {/* 5. Store Sections */}
        <SectionCard
          title="storeSections"
          img={imgStore}
          incharge=""
          content={renderList([
            "storeSectionI",
            "storeSectionII",
            "storeSectionIII",
          ])}
        />

        {/* 6. Committee Section */}
        <SectionCard
          title="committeeSection"
          img={imgCommittee}
          incharge=""
          content={renderList([
            "equipmentChecks",
            "testReceiptReports",
          ])}
        />

        {/* 7. Test Cell */}
        <SectionCard
          title="testCell"
          img={imgTest}
          incharge=""
          content={renderList([
            "testingWireless",
            "maintenanceCentralStore",
          ])}
        />

        {/* 8. Central Store Admin Section */}
        <SectionCard
          title="centralStoreAdmin"
          img={imgCentral}
          incharge=""
          content={renderList([
            "inwardOutwardEntries",
            "recordKeeping",
            "assistStoreSections",
          ])}
        />

        {/* 9. Cipher Branch */}
        <SectionCard
          title="cipherBranch"
          img={imgCipher}
          incharge="dyspCipher"
          content={renderList([
            "custodianCipher",
            "courierArrangements",
            "coordinationCryptoCenters",
            "cipherCourses",
            "maintenanceCipherDocs",
            "loadingCipherPrograms",
            "inspectionsCryptoCenters",
          ])}
        />

        {/* 10. License Branch */}
        <SectionCard
          title="licenseBranch"
          img={imgLicense}
          incharge="dyspLicense"
          content={renderList([
            "applyRadioLicenses",
            "paySpectrumCharges",
            "applyFrequencies",
            "distributeNetworkLetters",
            "trafficReturns",
            "prepareCallSigns",
          ])}
        />

        {/* 11. Traffic Branch */}
        <SectionCard
          title="trafficBranch"
          img={imgTraffic}
          incharge="dyspTraffic"
          content={renderList([
            "inspectPolnetStations",
            "prepareCallSigns",
            "conductITExams",
            "superviseTrafficCases",
            "scrutinySecurityBreach",
          ])}
        />
      </div>
    </div>
  );
}
