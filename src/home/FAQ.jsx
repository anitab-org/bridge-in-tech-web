import React from 'react';
import './FAQ.css';
import FAQcard from './FAQcard/FAQcard';
export default function FAQ() {
  return (
    <section className="faq_section">
      <div className="heading_container">
        <h1 className="heading_faq">FAQs</h1>
      </div>
      <div className="faq_content_container">
        <div className="main_content_faq">
          <FAQcard
            text="Do I need to pay to be a member of Bridge-in-tech?"
            answer="Lorem ipsum dolor sit amet. Qui quia saepe sed earum odio ad delectus placeat aut consequatur omnis ut officiis exercitationem hic odit similique est eveniet. Est eaque quae et velit doloremque qui labore sequi eos adipisci illo qui dolores galisum."
          />
          <FAQcard
            text="What are the ways I can communicate in the community?"
            answer="Ex placeat alias vel illum nulla est quibusdam sapiente et iusto animi et quia rerum qui quia natus. Ea sunt molestiae sed molestiae inventore et sunt quod? Et repellendus adipisci qui aliquid iste est inventore suscipit"
          />
          <FAQcard
            text="How long does the program take and are the meet-ups physical or am allowed to join online?"
            answer="Nostrum illum ea harum facere est quidem animi. Sit odio maxime qui possimus excepturi ut quos est quaerat aliquam non fugit quaerat. Aut nobis dolor ut vero obcaecati et sunt accusamus sed odit eaque."
          />
          <FAQcard
            text="What are the benefits if joining bridge-in-tech as a regular member?"
            answer="eos fuga quam. Ut dolorem accusantium qui deserunt quas qui provident corrupti ut quidem quam et optio fugiat ad deserunt voluptatem ea maxime similique. Ut quaerat expedita et dolor iste ut consectetur praesentium aut earum quia. Qui voluptatem omnis et nihil accusamus et consequatur sequi qui quaerat exercitationem eum dicta quae?"
          />
          <FAQcard
            text="What do I need to get started as a mentee in bridge-in-tech?"
            answer="ere ut aspernatur earum est pariatur facilis. Et facilis alias eos quia sint sit ipsa voluptas qui neque consequuntur est eveniet sunt id cumque officia ut fuga ipsam. Et dolor eveniet et expedita consequatur aut distinctio obcaecati non quia sequi. A totam sequi sit corporis necessitatibus ut magni la"
          />
        </div>
      </div>
    </section>
  );
}
