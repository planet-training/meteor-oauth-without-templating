#!/usr/bin/env bash
pushd google-no-ui-conf
meteor publish
popd
pushd facebook-no-ui-conf
meteor publish
popd
pushd accounts-google
meteor publish
popd
pushd accounts-facebook
meteor publish
popd
