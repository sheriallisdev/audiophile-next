import { Formik, Field } from "formik";
import * as Yup from "yup";

import { Backdrop, Button, Container } from "@components/ui";
import {
  CartSummary,
  FieldSet,
  OrderConfirmation,
  TextField,
} from "@components/checkout";
import { useRouter } from "next/router";

import styles from "./checkout.module.scss";
import { useState } from "react";

import { Dialog } from "@headlessui/react";

const CheckoutPage = () => {
  const router = useRouter();
  const [orderIsComplete, setOrderIsComplete] = useState(false);

  return (
    <Container className={styles.checkoutPageContainer}>
      <button className={styles.backLink} onClick={() => router.back()}>
        Go Back
      </button>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={async () => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setOrderIsComplete(true);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          email: Yup.string().email().required("Required"),
          phone: Yup.string().required("Required"),
          address: Yup.string().required("Required"),
          zipcode: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Container className={styles.detailsContainer}>
                <h1 className={styles.pageTitle}>Checkout</h1>
                <FieldSet legend="Billing Details">
                  <TextField
                    label="Name"
                    id="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.address}</div>
                  )}

                  <TextField
                    label="Email Address"
                    id="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}

                  <TextField
                    label="Phone Number"
                    id="phone"
                    placeholder="Enter your phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone && touched.phone}
                  />
                  {errors.phone && touched.phone && (
                    <div className="input-feedback">{errors.phone}</div>
                  )}
                </FieldSet>

                <FieldSet legend="Shipping Info">
                  <TextField
                    label="Your Address"
                    id="address"
                    placeholder="Enter your address"
                    value={values.adress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.address && touched.address}
                  />
                  {errors.address && touched.address && (
                    <div className="input-feedback">{errors.address}</div>
                  )}

                  <TextField
                    label="ZIP Code"
                    id="zipcode"
                    placeholder="Enter your zipcode"
                    value={values.zipcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.zipcode && touched.zipcode}
                  />
                  {errors.zipcode && touched.zipcode && (
                    <div className="input-feedback">{errors.zipcode}</div>
                  )}

                  <TextField
                    label="City"
                    id="city"
                    placeholder="Enter your city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.city && touched.city}
                  />
                  {errors.city && touched.city && (
                    <div className="input-feedback">{errors.city}</div>
                  )}

                  <TextField
                    label="Country"
                    id="country"
                    placeholder="Enter your country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.country && touched.country}
                  />
                  {errors.country && touched.country && (
                    <div className="input-feedback">{errors.country}</div>
                  )}
                </FieldSet>

                <FieldSet legend="Payment Details">
                  <div
                    id="payment-method-group"
                    className={styles.paymentMethodTitle}
                  >
                    Payment Method
                  </div>
                  <div
                    role="group"
                    aria-labelledby="payment-method-group"
                  ></div>
                  <div>
                    <label>
                      <Field type="radio" name="picked" value="emoney" />
                      e-Money
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        name="picked"
                        value="cashondelivery"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                  {values.picked === "emoney" ? (
                    <div>
                      <TextField
                        label="e-Money Number"
                        id="emoneynumber"
                        placeholder="238521993"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.emoneynumber && touched.emoneynumber}
                      />
                      {errors.emoneynumber && touched.emoneynumber && (
                        <div className="input-feedback">
                          {errors.emoneynumber}
                        </div>
                      )}
                      <TextField
                        label="e-Money PIN"
                        id="emoneypin"
                        placeholder="6891"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.emoneypin && touched.emoneypin}
                      />
                      {errors.emoneypin && touched.emoneypin && (
                        <div className="input-feedback">{errors.emoneypin}</div>
                      )}
                    </div>
                  ) : null}
                </FieldSet>
              </Container>

              <Container className={styles.summartContainer}>
                <CartSummary />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="fullWidth"
                >
                  Continue & Pay
                </Button>
              </Container>
            </form>
          );
        }}
      </Formik>
      <Dialog
        open={orderIsComplete}
        onClose={() => setOrderIsComplete(false)}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "999",
          width: "100%",
          minHeight: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        <Backdrop aria-hidden="true" />
        <Dialog.Panel>
          <OrderConfirmation />
        </Dialog.Panel>
      </Dialog>
    </Container>
  );
};

export default CheckoutPage;
