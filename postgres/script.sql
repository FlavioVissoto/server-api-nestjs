-- Table: public.tb_test

-- DROP TABLE IF EXISTS public.tb_test;

CREATE TABLE IF NOT EXISTS public.tb_test
(
    id integer NOT NULL DEFAULT nextval('tb_test_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tb_test_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tb_test
    OWNER to vissoto;

SELECT id, name
	FROM public.tb_test;
	
CREATE SEQUENCE test_sequence
  start 1
  increment 1;
  
INSERT INTO public.tb_test VALUES(nextval('test_sequence'), 'Vissoto');
INSERT INTO public.tb_test VALUES(nextval('test_sequence'), 'Jessica');
INSERT INTO public.tb_test VALUES(nextval('test_sequence'), 'Miguel');



